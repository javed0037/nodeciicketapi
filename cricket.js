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
          opt.url = 'http://13.127.62.139/live-c78676/Codds.php?live-match=asd-crick-alph-live-18&id=4';
            request(opt.url,(err,result) => {
            if(err){
              console.log('there are the err',err);
            }else{

                setTimeout(function() {
                var result1 = JSON.parse(result.body);
                for (var i = 0; i <=result1.result.length-1; i++) {

                 client.set('Market_Id_'+parseFloat(result1.result[i].id), JSON.stringify(result1.result[i]), redis.print);
                 console.log(i)

                } next();

        }, delay)

              }
            });
        },
        function(err) {
            console.error(err);
        }
    );
