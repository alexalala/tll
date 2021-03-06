require('dotenv').config();
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

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('/imageView', function (req, res) {
	res.render('imageView');
});

var port = process.env.PORT || '3000';

app.listen(port, function() {
	console.warn('Listening ' + port);
});
