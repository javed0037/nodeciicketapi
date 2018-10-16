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
app.get('/test2', async (req, res) => {
  client.keys("*", function (err, reply) {
    if(err) {
      console.log(err)
    }else if(reply){
                        //  ..  for (var i = 0;  i <reply.length; i++){

                         //app.post('/test1', async (req, res) => {
                        // console.log("there are req   ",reply[i])
     async.map(reply, function(key, cb) {
        client.get(reply, async (error, value)=> {


      console.log("there are the result",data.result[0].btype !== 'ODDS')
      console.log("there are Id for that",data.result.length)
                for (var i = 0;  i < data.result.length; ++i){

                  if(data.result[i].btype == 'ODDS'){
                    var dataq ={};
                    var  id =  data.result[i].id;
                    var sid  =  data.result[i].runners[0].id;
                     dataq = data.result[i].runners[0].back[0];
                     dataq1= data.result[i].runners[0].lay[0];
                     console.log("there are dataq",dataq)
                     delete dataq.size;
                      delete dataq1.size;
                     dataq = JSON.stringify(dataq)
                     dataq1 = JSON.stringify(dataq1)
                       var data1  =   await  client.set('MarketId_' + parseFloat(id) + '_S'+ sid +'_Back' , dataq);
                        var data1  =   await  client.set('MarketId_' + parseFloat(id) + '_S'+ sid +'_LAY' , dataq1);

                    }
                  }

               return res.json({message : "data save successfully",status : 200});
             })
           })
         }
             else {
               console.log("please enter valid data")
               res.json({message : "please send valid data"})
             }

        })
      })
//       }
//
//   })
// })

        let port = process.env.PORT || 5001;
        app.listen(port,function(req,res){
          console.log("app is listen on the port no ",port);
        })


//  if (i%2 !==0) {
