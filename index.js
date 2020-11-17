//require stuff
const app = require('express')()
const dinoRouter = require('./controllers/dinoController')
const layouts = require('express-ejs-layouts')

// additional setup
app.set('view engine', 'ejs');

// our routes
app.get('/', (req, res) => {
    res.send('hello I am alive!')
})

app.use('/dinosaurs', dinoRouter);
app.use(layouts);

//listen
app.listen(8000, () => {
    console.log('server started')
})