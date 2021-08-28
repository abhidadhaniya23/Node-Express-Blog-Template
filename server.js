const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// set view engine
app.set('view engine', 'ejs')

// static files
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile('index.html')
})
app.get('/about', (req, res) => {
	res.render('about.ejs', {
		title: 'About Us || Time Square Blogs'
	})
})
app.get('/post', (req, res) => {
	res.render('post.ejs', {
		title: 'Post Title',
		postTitle: 'How to motivate while learn code ?'
	})
})
app.use((req, res) => {
	res.status(404)
	res.render('404-not-found.ejs', {
		title: '404 Not Found'
	})
})

app.listen(port, () => {
	console.log(`App listening at http ://localhost:${port}`)
})