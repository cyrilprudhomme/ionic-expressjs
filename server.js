const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const { MongoClient } = require("mongodb");
// const mongoClient = new MongoClient("mongodb://root:example@localhost?retryWrites=true&w=majority");
const mongoClient = new MongoClient(
  "mongodb://root:example@localhost:27017?retryWrites=true&w=majority"
);

// app.post('/projects', async (req, res, next) => {
//   try {
//     await mongoClient.connect();
//     const exist = await mongoClient.db("app").collection("projects").findOne({name: req.body.name})
//     if (!exist) {
//       const result = await mongoClient.db("app").collection("projects").insertOne(req.body);
//       console.log("Project ajouté " + result.insertedId)
//       req.body.message = "Project ajouté " + result.insertedId
//       res.status(200).json({message: req.body.message})
//     } else {
//       console.log("Project déja présent")
//       req.body.message = "Project déja présent"
//       res.status(200).json({message: req.body.message})
//     }
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({message: `${e}`})
//   } finally {
//     await mongoClient.close();
//   }
// })
app.post("/project", insertToMongo);
app.get("/projects", async function (req, res) {
  try {
    await mongoClient.connect();
    const results = await mongoClient
      .db("app")
      .collection("projects")
      .find({})
      .toArray();
    res.json(results);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: `${e}` });
  } finally {
    await mongoClient.close();
  }
});

// LAISSER LE SITE EN DERNIER DANS L'ORDRE DU FICHIER
app.use(express.static("www"));
app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/www/index.html"));
  //__dirname : It will resolve to your project folder.
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function insertToMongo(req, res) {
  const collection = "projects";
  try {
    await mongoClient.connect();
    const exist = await mongoClient
      .db("app")
      .collection(collection)
      .findOne({ name: req.body.name });
    if (!exist) {
      const result = await mongoClient
        .db("app")
        .collection(collection)
        .insertOne(req.body);
      console.log("Element ajouté " + result.insertedId);
      req.body.message = "Element ajouté " + result.insertedId;
      res.status(200).json({ message: req.body.message });
    } else {
      console.log("Element déja présent");
      req.body.message = "Element déja présent";
      res.status(200).json({ message: req.body.message });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: `${e}` });
  } finally {
    await mongoClient.close();
  }
}
