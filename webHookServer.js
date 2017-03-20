const exec = require('child_process').exec;
var express = require('express')
var app = express()
require('dotenv').config()



var secretAccessKey = process.env.ACCESS_KEY;
var port = process.env.PORT;

app.get('/lampOn', function (req, res) {
   if(req.query.secret == secretAccessKey) {
     exec('/home/pi/kaku/kaku ' + req.query.lamp + ' C on', function(error, stdout, stderr) {
 
 if (!error) {
    // print the output
   // sys.puts(stdout);
  } else {
    // handle error
  }
});
    res.send("OK");
  }else{
    res.status(403).send("NO. :(");
  }
})

app.get('/lampOff', function (req, res) {
   if(req.query.secret == secretAccessKey) {
     exec('/home/pi/kaku/kaku ' + req.query.lamp +' C off', function(error, stdout, stderr) {
  if (!error) {
    // print the output
   // sys.puts(stdout);
  } else {
    // handle error
  }
});
    res.send("OK");
  }else{
    res.status(403).send("NO. :(");
  }
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
