const express = require('express')
const path = require("path");
const app = express()
const port = 3000

app.use(express.static('www'));

app.use('/', function(req,res){
  res.sendFile(path.join(__dirname+'/www/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
