const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const bodyParser = require('body-parser');

// csrf
const csrfProtection = csrf({ cookie: true })
const parseForm = bodyParser.urlencoded({ extended: false })

// server
const app = express();
const server = app.listen(7001, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

// permit some files
app.use('/js', express.static('public/js'));
app.use('/lib', express.static('public/lib'));
app.use('/fonts', express.static('public/fonts'));
app.use('/styles', express.static('public/styles'));
app.use('/assets', express.static('public/assets'));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', 'public/views');
app.set('view engine', 'ejs');

app.get('/', csrfProtection, function (req, res) {
    res.render('home', { route: 'home', csrfToken: req.csrfToken() });
});