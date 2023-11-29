// Create web server using Express
// Use the comments.json file to store comments
// Use the comments.js file to handle the requests
// Use the comments.js file to handle the requests

// 1. Importing the modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

// 2. Create an instance of express
const app = express();

// 3. Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 4. Middleware (app.use)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// 5. Routes
// Home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My App',
        comments: comments
    });
});

// New comment form
app.get('/new-comment', (req, res) => {
    res.render('new-comment', {
        title: 'New Comment'
    });
});

// New comment
app.post('/new-comment', (req, res) => {
    const { name, comment } = req.body;
    const newComment = {
        name,
        comment,
        date: new Date()
    };
    comments.push(newComment);
    fs.writeFileSync(path.join(__dirname, 'data/comments.json'), JSON.stringify(comments));
    res.redirect('/');
});

// 6. Server
app.listen(3000, () => {
    console.log('Server running at port 3000');
});