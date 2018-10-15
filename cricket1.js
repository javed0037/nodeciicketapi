const  redis = require('redis');
const express = require('express');
var router = express.Router();
var promises = require('es6-promise').Promise;

const request = require('request');
var cors = require('cors')
const bodyparser = require('body-parser')
const http = require("http");
var app = express();


app.use(bodyparser({limit: '50mb'}))
app.use(bodyparser.urlencoded({limit: '50mb'}));
app.use(bodyparser());
app.use(bodyparser.json());
client = redis.createClient();
app.use(cors())

require('dotenv').config();

app.post('/test1', async (req, res) => {

var data  = req.body.data;
console.log("there are Id for that",data.result.length)

          for (var i = 0;  i < data.result.length; ++i){
            if (i%2 !==0) {
              var dataq ={};
              var  id =  data.result[i].id;
              var sid  =  data.result[i].runners[0].id;
               dataq = data.result[i].runners[0].back[0];
               console.log("there are dataq",dataq)
               delete dataq.size;
               dataq = JSON.stringify(dataq)
                 var data1  =   await  client.set('MarketId_' + parseFloat(id) + '_S'+ sid +'_Back' , dataq);

              }
            }

         return res.json({message : "data save successfully",status : 200});

  })
  let port = process.env.PORT || 5001;
  app.listen(port,function(req,res){
    console.log("app is listen on the port no ",port);
  })
