const dinoRouter = require('express').Router();


dinoRouter.get('/', (req, res) => {
    res.render('dinosaurs/index')
})


module.exports = dinoRouter;