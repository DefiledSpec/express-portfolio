require('dotenv').config()
const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
	service: 'gmail',
	secure: false,
	port: 25,
	auth: {
		user: process.env.MAILUSERNAME,
		pass: process.env.MAILPASSWORD
	},
	tls: {
		rejectUnauthorized: false
	}
})