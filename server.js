var express = require('express'),
    app = express(),
    morgan = require('morgan');

Object.assign = require('object-assign');

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function (req, res) {
    res.render('index.html', {pageCountMessage: null});

});

app.get('/ws/eBayISAPI.dll?SignIn', function (req, res) {
    res.render('ebayLogin.html', {pageCountMessage: null});

});


app.post('/ws/eBayISAPI.dll?co_partnerId=2&siteid=0&UsingSSL=1', function (req, res) {
    res.end()

});


app.post('/ebayHome', function (req, res) {
    res.render('ebayHome.html', {pageCountMessage: null});

});


app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
});


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;
