const { raw } = require('express');
const fs = require('fs')

const dinoRouter = require('express').Router();


dinoRouter.get('/', (req, res) => {
    const rawDinos = fs.readFileSync('dinosaurs.json') //will read in text from this file
    const dinos = JSON.parse(rawDinos)

    res.render('dinosaurs/index', { dinos })
})

dinoRouter.get('/:id', (req, res) => {
    const rawDinos = fs.readFileSync('dinosaurs.json') //will read in text from this file
    const dinos = JSON.parse(rawDinos)
    const id = parseInt(req.params.id) - 1
    const dino = dinos[id]
    res.render('dinosaurs/show', { dino })
})


module.exports = dinoRouter;