const express = require('express');
const path = require("path");
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())
const {MongoClient} = require('mongodb');
// const mongoClient = new MongoClient("mongodb://root:example@localhost?retryWrites=true&w=majority");
const mongoClient = new MongoClient("mongodb://root:example@localhost:27017?retryWrites=true&w=majority");


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
app.post('/projects', (req, res) => {
  console.log(req.body)
  res.send('POST request to the homepage')
})


// LAISSER LE SITE EN DERNIER DANS L'ORDRE DU FICHIER
app.use(express.static('www'));
app.use('/', function(req,res){
  res.sendFile(path.join(__dirname+'/www/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
