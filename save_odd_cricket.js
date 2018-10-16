const  redis = require('redis');
const express = require('express');
const cors = require('cors')
var router = express.Router();
var promises = require('es6-promise').Promise;
const request = require('request');
const bodyparser = require('body-parser')
const http = require("http");
var app = express();
app.use(cors())
app.use(bodyparser({limit: '50mb'}))
app.use(bodyparser.urlencoded({limit: '50mb'}));
app.use(bodyparser());
app.use(bodyparser.json());
client = redis.createClient();


require('dotenv').config();

app.post('/test1', async (req, res) => {
//console.log("there are req   ",req.body)
var data  = req.body;
 //data = JSON.parse(data);
if(data){
try {
          for (var i = 0;  i < data.result.length; i++){
            var market = data.result[i]  ;

             var  mid = market.id ;
             var index  = mid.indexOf("-") ;
              if(index!= -1)
                  mid = mid.split("-")[0];
        //   console.log(JSON.stringify( market));

                client.set(mid , JSON.stringify( market), redis.print);


             console.log('data11111');

            }
          }catch(e)
          {
              console.log(e);
            }
         // return res.json({message : "data save successfully",status : 200});
       }
       else {
         console.log("please enter valid data")
         res.json({message : "please send valid data"})
       }
  })

  let port = process.env.PORT || 5001;
  app.listen(port,function(req,res){
    console.log("app is listen on the port no ",port);
  })


//  if (i%2 !==0) {
