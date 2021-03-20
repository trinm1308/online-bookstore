const express = require('express')
const router = express.Router()
const service = require('./service') 

router.get('/', getAllAccounts)
router.get('/:id', getAccount)
router.post('/', addAccount)
router.put('/', updateAccount)
router.delete('/', deleteAccount)

router.post('/login', login)

async function getAllAccounts(req, res){
    res.send(await service.getAllAccounts())
}

async function getAccount(req, res){
    res.send(await service.getAccount(req.params.id))
}

async function addAccount(req, res){
    res.send(await service.addAccount(req.body))
}

async function updateAccount(req, res){
    res.send(await service.updateAccount(req.body))
}

async function deleteAccount(req, res){
    res.send(await service.deleteAccount(req.params.id))
}

async function login(req, res){
    res.send(await service.login(req.body))
}

module.exports = router