const express = require('express')
const router = express.Router()
const service = require('./service') 

router.get('/', getAllAuthors)
router.get('/:id', getAuthor)
router.post('/', addAuthor)
router.put('/', updateAuthor)
router.delete('/:id', deleteAuthor)

async function getAllAuthors(req, res){
    res.send(await service.getAll())
}

async function getAuthor(req, res){
    res.send(await service.getOne(req.params.id))
}

async function addAuthor(req, res){
    res.send(await service.addOne(req.body))
}

async function updateAuthor(req, res){
    res.send(await service.updateOne(req.body))
}

async function deleteAuthor(req, res){
    res.sendStatus(await service.deleteOne(req.params.id))
}

module.exports = router