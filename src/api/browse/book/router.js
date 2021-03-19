const express = require('express')
const router = express.Router()
const service = require('./service') 

router.get('/', getAllBooks)
router.get('/:id', getBook)
  
async function getAllBooks(req, res){
    res.send(await service.getAllBooks())
}

async function getBook(req, res){
    res.send(await service.getBook(req.params.id))
}

module.exports = router