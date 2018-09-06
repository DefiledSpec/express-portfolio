const express = require('express')
const projects = require('../data/projects')
const bio = require('../data/bio')

const router = express.Router()

router.get('/', (req, res) => {
	res.send('api home')
})

router.get('/bio', (req, res) => {
	res.json(bio)
})

router.get('/messages', (req, res) => {
	res.send('messages api')
})

router.get('/projects', (req, res) => {
	res.json(projects)
})

module.exports = router
