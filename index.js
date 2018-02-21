var express = require('express');
var http 	= require('http');
var path 	= require('path');
var request = require('request');
var morgan = require('morgan');
var app = express();
const bodyParser = require('body-parser');
const snsSubscriptionConfirmation = require('aws-sns-subscription-confirmation');


const PORT = process.env.PORT || 5000;


app.set('port', PORT);

//app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
//app.use(express.favicon());


app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));
app.use(snsSubscriptionConfirmation.overrideContentType());
app.use(bodyParser.json());
app.use(snsSubscriptionConfirmation.snsConfirmHandler());

app.use('/iotbutton', function(req, res){
	
	req.pipe(request('http://iotpay.herokuapp.com/contract/iotbutton')).pipe(res);
//	request.get("http://iotpay.herokuapp.com/contract/iotbutton").on('response',function(res){
//		console.log(res.statusCode); // 200
  //  	console.log(res.headers['content-type']);
//	})
});

//routes
app.use('/*', function(req, res){	    
  res.sendFile('./public/index.html');
});



http
	.createServer(app)
	.listen(app.get('port'), function(){
  		console.log('Bootcards demo app listening on port ' + app.get('port'));
	}
);
