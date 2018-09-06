const express = require('express')
const projects = require('../data/projects')
const bio = require('../data/bio')
const router = express.Router()
const emailer = require('../email')

router.get('/', (req, res) => {
	res.render('about', { items: projects, bio })
})

router.get('/portfolio', (req, res) => {
	res.render('portfolio', { items: projects })
})

router.get('/contact', (req, res) => {
	res.render('contact', { items: projects })
})

router.get('/resume', (req, res) => {
	res.render('resume')
})

router.post('/contact', (req, res) => {
	let { name, email, comment } = req.body
	let emailOpts = {
		from: `"${name.trim()}" <${email.trim()}`,
		to: 'harrahjz@gmail.com',
		subject: 'Portfolio Contact',
		text: comment.trim()
	}
	emailer.sendMail(emailOpts, (err, info) => {
		if(err) {
			res.render('contact', { msg: 'There was a problem sending the email. Please try again!' })
		}
		res.render('contact', { msg: 'Email Sent Successfully!' })
	})
})

module.exports = router
