const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog.routes');

const app = express();

// mongoDB connection and port listening
const dbURI = 'mongodb+srv://blogapp:blog123@blogappdb.spncqqr.mongodb.net/blogappdb?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result) => {
    console.log('DB is connected');
    app.listen(3000, () => console.log('listening to http://localhost:3000'));
})
.catch((err) => console.log(err.message));

//template engines
app.set('view engine', 'ejs');

// middlewares & static files
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//route handlers
app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'ABOUT'});
});

//blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: 404});
});
