const express = require('express')
const book = express.Router()
const service = require('./service') 

book.get('/', getAllBooks)
book.get('/:id', getBook)
book.post('/', addBook)
book.put('/', updateBook)
book.delete('/', deleteBook)

async function getAllBooks(req, res){
    res.send(await service.getAllBooks())
}

async function getBook(req, res){
    res.send(await service.getBook(req.params.id))
}

async function addBook(req, res){
    res.send(await service.addBook(req.body))
}

async function updateBook(req, res){
    res.send(await service.updateBook(req.body))
}

async function deleteBook(req, res){
    res.send(await service.deleteBook(req.params.id))
}

module.exports = book