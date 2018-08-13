const express = require('express')
const projects = require('../data/projects')
const bio = require('../data/bio')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('about', { items: projects, bio })
})

router.get('/portfolio', (req, res) => {
	res.render('portfolio', { items: projects })
})

router.get('/contact', (req, res) => {
	res.render('contact', { items: projects })
})

module.exports = router
