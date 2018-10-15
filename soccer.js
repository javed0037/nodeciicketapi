var redis = require('redis');
var request = require('request');
var http = require("http");

var async = require("async");
    client = redis.createClient();
  
    //Delay of 5 mili seconds
    var delay = 300;
    async.forever(

        function(next) {

          var opt = {
            methot : 'GET',
            headers : {'content-type' : 'application/json','charset' : 'utf-8'},
            json : true
          };
          opt.url = 'http://13.127.62.139/live-c78676/Codds.php?live-match=asd-crick-alph-live-18&id=1';
            request(opt.url,(err,result) => {
            if(err){
           console.log('there are the err',err);
            }else{
              client.set("soccer" , result.body, redis.print);
                    setTimeout(function() {
                    
                        next();
                        
                    }, delay)
            
              }
            });
        },
        function(err) {
            console.error(err);
        }
    );

