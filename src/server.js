var express = require("express");
var app = express();

app.get('/', function(res, req){
   res.send('Hello World');
});

app.listen(8080, function(){
   console.log("Express");
});