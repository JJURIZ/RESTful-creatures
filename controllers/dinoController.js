const { raw } = require('express');
const fs = require('fs')

const dinoRouter = require('express').Router();


dinoRouter.get('/', (req, res) => {
    const rawDinos = fs.readFileSync('dinosaurs.json') //will read in text from this file
    const dinos = JSON.parse(rawDinos)

    res.render('dinosaurs/index', { dinos })
})

// new has to be above show, or else it will think 'new' is an id value
dinoRouter.get('/new', (req, res) => {
    res.render('dinosaurs/new');
})

dinoRouter.get('/:id', (req, res) => {
    const rawDinos = fs.readFileSync('dinosaurs.json') //will read in text from this file
    const dinos = JSON.parse(rawDinos)
    const id = parseInt(req.params.id) - 1
    const dino = dinos[id]
    res.render('dinosaurs/show', { dino })
})

dinoRouter.post('/', (req, res) => {
    const newDino = req.body
    const rawDinos = fs.readFileSync('dinosaurs.json')
    const dinos = JSON.parse(rawDinos)
    dinos.push(newDino)

    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinos))
    res.redirect('/dinosaurs');
})

module.exports = dinoRouter;