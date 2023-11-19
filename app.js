let express = require('express');
let app = express();
let port = 9120
let Mongo = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect,getData} = require('./Controller/dbController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send("Hii From Express")
})

app.get('/location',async(req,res) => {
  let query = {};
  let collection = "location";
  let output = await getData(collection,query);
  res.send(output)
})

app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})