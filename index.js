const express = require('express')
const app = express()
const list = require('lista-impropria-api');

app.set('port', (8080))
app.use(express.static(__dirname + '/public'))

app.get('/testam/', function(request, response) {
  testamEmAnimais(request, response);
})

app.get('/naoTestam/', function(request, response) {
  testamEmAnimais(request, response);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

function testamEmAnimais(request, response) {
	list.testamEmAnimais().then(function(tabela) {
	response.send(tabela);
}, function(err){
	response.send(err);
});
}

function naoTestamEmAnimais(request, response) {
	list.naoTestamEmAnimais().then(function(tabela) {
	response.send(tabela);
}, function(err){
	response.send(err);
});
}