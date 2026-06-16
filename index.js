const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const userData = [];

app.get('/', (req, res) => {
    res.render('index', { userData });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;
    userData.push({ name, email, age });
    res.redirect('/');
});

app.get('/*any', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});