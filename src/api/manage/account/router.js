const express = require('express')
const router = express.Router()
const service = require('./service') 

router.get('/', getAllAccounts)
router.get('/:username', getAccount)
router.post('/', addAccount)
router.put('/', updateAccount)
router.delete('/:username', deleteAccount)

router.post('/login', login)

async function getAllAccounts(req, res){
    res.send(await service.getAll())
}

async function getAccount(req, res){
    res.send(await service.getOne(req.params.username))
}

async function addAccount(req, res){
    res.send(await service.addOne(req.body))
}

async function updateAccount(req, res){
    res.send(await service.updateOne(req.body))
}

async function deleteAccount(req, res){
    res.sendStatus(await service.deleteOne(req.params.username))
}

async function login(req, res){
    res.send(await service.login(req.body))
}

module.exports = router