const express = require('express');
const path = require("path");
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())
const {MongoClient} = require('mongodb');
// const mongoClient = new MongoClient("mongodb://root:example@localhost?retryWrites=true&w=majority");
const mongoClient = new MongoClient("mongodb://root:example@localhost:27017?retryWrites=true&w=majority");

app.use(express.static('www'));
app.get('/projects', async function (req, res) {
  try {
    await mongoClient.connect();
    const results = await mongoClient.db("app").collection("projects").find({}).toArray()
    res.json(results)
  } catch (e) {
    console.error(e);
    res.status(500).json({message: `${e}`})
  } finally {
    await mongoClient.close();
  }
});
app.post('/project', async function (req, res) {
  // try {
  //   await mongoClient.connect();
  //   const results = await mongoClient.db("app").collection("projects").find({}).toArray()
  //   res.json(results)
  // } catch (e) {
  //   console.error(e);
  //   res.status(500).json({message: `${e}`})
  // } finally {
  //   await mongoClient.close();
  // }
  try {
    await mongoClient.connect();
    const exist = await mongoClient.db("app").collection("projects").findOne({name: req.body.name})
    if (!exist) {
      const result = await mongoClient.db("app").collection("projects").insertOne(req.body);
      console.log("Utilisateur ajouté " + result.insertedId)
      req.body.message = "Utilisateur ajouté " + result.insertedId
    } else {
      console.log("Utilisateur déja présent")
      req.body.message = "Utilisateur déja présent"
      await sendNewsletter(req, res)
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({message: `${e}`})
  } finally {
    await mongoClient.close();
  }
});




// LAISSER LE SITE EN DERNIER DANS L'ORDRE DU FICHIER

app.use('/', function(req,res){
  res.sendFile(path.join(__dirname+'/www/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
