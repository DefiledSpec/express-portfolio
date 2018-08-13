const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const path = require('path')
const hbs = require('express-handlebars')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 5000

const app = express()

app.engine('hbs', hbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('x-powered-by', false)

app.use(express.static('./public'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)


app.listen(PORT, () => console.dir(`App Listening at http://localhost:${PORT}`, PORT, { colors: true }))
// console.dir(app, {colors: true})
