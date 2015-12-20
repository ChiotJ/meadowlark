/**
 * Created by jian_ on 2015/12/8.
 */
var express = require('express');
var app = express();

// 设置 handlebars 视图引擎
var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main.hbs'});
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000);


app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    var fortunes = [
        "Conquer your fears or they will conquer you.",
        "Rivers need springs.",
        "Do not fear what you don't know.",
        "You will have a pleasant surprise.",
        "Whenever possible, keep it simple."
    ];
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {
        fortune: randomFortune,
        pageTestScript: '/qa/tests-about.js'
    });
});

app.get('/tours/hood-river', function (req, res) {
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate');
});

// 定制 404 页面
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

// 定制 500 页面
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});