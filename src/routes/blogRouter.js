const express = require('express')
const blogRouter = express.Router()

blogRouter.get('/', async (req, res) => {
    res.render('about.ejs', {
        title: 'About Us || Time Square Blogs'
    })
})
blogRouter.get('/about', async (req, res) => {
    res.render('about.ejs', {
        title: 'About Us || Time Square Blogs'
    })
})
blogRouter.get('/post', async (req, res) => {
    res.render('post.ejs', {
        title: 'Post Title',
        postTitle: 'How to motivate while learn code ?'
    })
})

module.exports = blogRouter