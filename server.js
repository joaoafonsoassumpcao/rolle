var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.disable('x-powered-by');

app.set('port', process.env.PORT || 80);

app.use(express.static(__dirname + '/public'));


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//more imports here



app.get('/', function(req, res){
    res.render('home');
});

app.get('/gestao-de-midias-sociais', function(req, res){
    res.render('gestao-de-midias-sociais');
});

app.get('/videos-producao-de-videos', function(req, res){
    res.render('videos-producao-de-videos');
});

app.get('/contato', function(req, res){
    res.render('contato');
});

app.get('/criacao-de-web-sites', function(req, res){
    res.render('criacao-de-web-sites');
});

app.get('/marketing-digital-e-seo', function(req, res){
    res.render('marketing-digital-e-seo');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(app.get('port'), function(){
    console.log("Express started on http://localhost:" + app.get('port') + " press ctrl c to terminate.");
});