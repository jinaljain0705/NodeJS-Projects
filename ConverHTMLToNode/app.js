const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

// Custom Middleware
const checkIsRegister = (req, res, next) => {
    if (req.query.isRegister === 'true') {
        return next();
    }
    return res.redirect('/');
};

// Routes
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/settings', checkIsRegister, (req, res) => {
    res.render('basic_elements'); 
});

app.get('/file-manager', (req, res) => {
    res.render('blank-page');
});

app.get('/signin', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('register');
});

app.get('/alerts', (req, res) => {
    res.render('error-404');
});

app.get('/cards', (req, res) => {
    res.render('basic-table');
});

app.get('/icons', (req, res) => {
    res.render('font-awesome');
});

app.get('/mdi-icons', (req, res) => {
    res.render('typography');
});

app.get('/form-elements', (req, res) => {
    res.render('dropdowns');
});

app.get('/tables', (req, res) => {
    res.render('basic-table');
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
