const express = require('express')
const router = express.Router()
const service = require('./service') 

router.get('/', getAllAuthors)
router.get('/:id', getAuthor)
router.post('/', addAuthor)
router.put('/', updateAuthor)
router.delete('/', deleteAuthor)

async function getAllAuthors(req, res){
    res.send(await service.getAllAuthors())
}

async function getAuthor(req, res){
    res.send(await service.getAuthor(req.params.id))
}

async function addAuthor(req, res){
    res.send(await service.addAuthor(req.body))
}

async function updateAuthor(req, res){
    res.send(await service.updateAuthor(req.body))
}

async function deleteAuthor(req, res){
    res.send(await service.deleteAuthor(req.params.id))
}

module.exports = router