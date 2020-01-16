var fs = require('fs');
var express = require('express')
var path = "myfile.txt";
var port = 80;
const app = express();





app.get('/ping', function (req, res) {
    console.log('received ping');
    res.send('Pong');
});


app.get('/', function (req, res) {
    console.log('received read');
    var strdata = fs.readFileSync(path,'utf8');  
    res.send("<h1>Last value: " + strdata + "</h1> Call http://servername/write?value=newvalue to change the value to something else. See http://github.com/danielmeixner/mirror for details.");
});

app.get('/write', function (req, res) {
    console.log('received write');
    var val = req.query.value;
    fs.writeFileSync(path,val);
    res.send('Wrote value: '+ val.toString());
});

app.listen(port);
console.log("running & listening on " + port)

