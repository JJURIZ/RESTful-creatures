//require stuff
const app = require('express')()
const dinoRouter = require('./controllers/dinoController')
const layouts = require('express-ejs-layouts')

// additional setup
app.set('view engine', 'ejs');
app.use(layouts);
// our routes
app.get('/', (req, res) => {
    res.send('ugh')
})

app.use('/dinosaurs', dinoRouter);


//listen
app.listen(8000, () => {
    console.log('server started')
})