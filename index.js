//require stuff
const express = require('express')
const app = express()
const dinoRouter = require('./controllers/dinoController');
const cryptidRouter = require('./controllers/cryptidController');
const methodOverride = require('method-override')
const layouts = require('express-ejs-layouts')

// additional setup
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.urlencoded({extended: false})) 
app.use(methodOverride('_method'))

// gives access to the 'body' part of form request/POST
// our routes

app.get('/', (req, res) => {
    res.send('ugh')
})

// Controllers used
app.use('/dinosaurs', dinoRouter);
app.use('/cryptids', cryptidRouter);


//listen
app.listen(8000, () => {
    console.log('server started')
})