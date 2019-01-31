const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const hbs = require('express-handlebars')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
const http = require('http')

const PORT = process.env.PORT || 5000

const app = express()

app.engine('hbs', hbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('x-powered-by', false)

app.use(express.static('./public'))
app.use(logger('short'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

app.listen(PORT, () => {
	console.log(`App Listening at http://localhost:${PORT}`)
	setInterval(function() {
		http.get('http://defiledspec.herokuapp.com')
	}, 600000) // every 10 minutes
})

module.exports = app
