const { json } = require('express')
const express = require('express')
const blogRouter = express.Router()
const path = require('path')
const postsData = require('../json/postsData.json')

// using middleware
// blogRouter.use('/', async (req, res, next) => {
//     try {
//         console.log(postsData);
//     } catch (error) {
//         console.log(error);
//     }
//     next()
// })

blogRouter.get('/', async (req, res) => {
    res.render('index.ejs', {
        postsJsonData: postsData
    })
})
blogRouter.get('/:postId', async (req, res) => {
    const post=postsData.find(post=>post.postId==req.params.postId)
    res.render('post.ejs',{
        title: post.postName,
        content: post.Content,
        hashTag: post.hashTag,
        updateDate: post.updatedDate
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