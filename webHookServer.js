const exec = require('child_process').exec;
var express = require('express')
var app = express()
require('dotenv').config()



var secretAccessKey = process.env.ACCESS_KEY;
var port = process.env.PORT;

/////////////////////////////KAKU////////////////////////////////
app.get('/lampOn', function (req, res) {
   if(req.query.secret == secretAccessKey) {
     exec('./kaku ' + req.query.lamp + ' A on', function(error, stdout, stderr) {
 
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
     exec('./kaku ' + req.query.lamp +' A off', function(error, stdout, stderr) {
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

app.get('/coffee', function(req, res){
 if(trackerConnected){
 var date = new Date(latestBrew);
 res.jsonp({coffeeLeft: coffeeLeft, latestBrew: date.toString() });
 }else{
 res.send("TRACKER NOT CONNECTED");
 }   	 
});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})

////////////////COFFEE TRACKER 9000 ////////////////////
var datetime = require('node-datetime');
var time = datetime.create();
var coffeeLeft = 0;
var newBrew = false;
var trackerConnected = false;
var latestBrew = time.now();


var serialport = require("serialport");
const parsers = serialport.parsers;
const parser = new parsers.Readline({
  delimiter: '\r\n'
});

var ports = [];
var idx = 0;

serialport.list(function (err, p) {
  p.forEach(function(p) {
    
    console.log(' [' + idx + '] ' + p.comName);
    ports.push(p.comName);    
    idx++;
  });

if(ports.length > 2){
var port = new serialport(ports[2], {
	baudRate: 9600
        });

port.pipe(parser);

port.on('open', function(){
  console.log('Serial Port Opend');
  trackerConnected = true;	
 parser.on('data',function(data){
	//console.log(data);
	if(data == "W"){
		newBrew = true;
	}
	if(data == "B" && newBrew){
		latestBrew = time.now();
		newBrew = false;
	}
	if(data == "E"){
		coffeeLeft = 0;
	}
	if(Number(parseInt(data))){
		coffeeLeft = data;
	}
	
});
});

}



});

