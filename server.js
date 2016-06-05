var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use('/img', express.static('img'));
app.use('/dist', express.static('dist'));
app.use('/third_party', express.static('third_party'));
app.use('/bower_components', express.static('bower_components'));
app.use('/styles', express.static('styles'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/collections', function (req, res) {
    res.render('collections');
});


app.listen('3000', function() {
	console.warn('Listening on port 3000, visit http://localhost:3000/');
});