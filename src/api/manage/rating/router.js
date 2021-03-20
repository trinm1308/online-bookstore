const express = require('express')
const router = express.Router()
const service = require('./service') 

router.get('/', getAllRatings)
router.get('/:id', getRating)
router.post('/', addRating)
router.put('/', updateRating)
router.delete('/:id', deleteRating)

async function getAllRatings(req, res){
    res.send(await service.getAll())
}

async function getRating(req, res){
    res.send(await service.getOne(req.params.id))
}

async function addRating(req, res){
    res.send(await service.addOne(req.body))
}

async function updateRating(req, res){
    res.send(await service.updateOne(req.body))
}

async function deleteRating(req, res){
    res.sendStatus(await service.deleteOne(req.params.id))
}

module.exports = router