const express = require('express')
const router = express.Router()
const service = require('./service') 

router.get('/', getAllBooks)
router.get('/advanced', getBooksAdvanced)
router.get('/:id', getBook)
router.post('/', addBook)
router.put('/', updateBook)
router.delete('/:id', deleteBook)


async function getAllBooks(req, res){
    res.send(await service.getAll())
}

async function getBook(req, res){
    res.send(await service.getOne(req.params.id))
}

async function addBook(req, res){
    res.send(await service.addOne(req.body))
}

async function updateBook(req, res){
    res.send(await service.updateOne(req.body))
}

async function deleteBook(req, res){
    res.sendStatus(await service.deleteOne(req.params.id))
}

async function getBooksAdvanced(req, res){
    res.send(await service.getBooksAdvanced())
}

module.exports = router