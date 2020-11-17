//require stuff
const express = require('express')
const app = express()
const dinoRouter = require('./controllers/dinoController');
const cryptidRouter = require('./controllers/cryptidController');
const layouts = require('express-ejs-layouts')

// additional setup
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.urlencoded({extended: false})) // gives access to the 'body' part of form request/POST
// our routes

app.get('/', (req, res) => {
    res.send('ugh')
})

app.use('/dinosaurs', dinoRouter);
app.use('/cryptids', cryptidRouter);

//listen
app.listen(8000, () => {
    console.log('server started')
})