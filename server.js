var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, response) {
    console.log('server is started');
    response.send('<h1>AJAX -> dz16</h1>')
});

server.get('/userGet', function (request, response) {
    console.log(request.query);
    var obj = request.query;
    obj.name = 'Vlad';
    obj.surname = 'Ivanenko';
    obj.age = 17;
    obj.residence = 'Zaborol';
    response.send('You have succesfully used GET : ' + JSON.stringify(request.query));
});

server.post('/userPost', function (request, response) {
    console.log(request.body);
    var obj = request.query;
    obj.userName = 'Pavlo';
    obj.userSurname = 'Pigasovych';
    obj.userAge = 24;
    obj.userLive = 'Bila Cercva';
    response.send('You have succesfully used POST : ' + JSON.stringify(obj));
});
server.listen(3001);
