const express = require('express')
const blogRouter = express.Router()
// const path = require('path')
const postsData = require('../json/postsData.json')

blogRouter.get('/', async (req, res) => {
    res.render('index.ejs', {
        postsJsonData: await postsData
    })
})
blogRouter.get('/post/:postId', (req, res) => {
    try{
        let post = postsData.find(post => post.postId === req.params.postId)
        res.render('post.ejs', {
            title: post.postName,
            content: post.Content,
            hashTag: post.hashTag,
            updateDate: post.updatedDate
        })
    }catch(error){
        console.log(error);
    }
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