const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// set view engine
app.set('view engine', 'ejs')

// static files
app.use(express.static('public'))

// Routes
const blogRouter = require('./src/routes/blogRouter')

app.use('/', blogRouter)

// if any page not found
app.use(async (req, res) => {
	res.status(404)
	res.render('404-not-found.ejs', {
		title: '404 Not Found'
	})
})

app.listen(port, () => {
	console.log(`App listening at http ://localhost:${port}`)
})