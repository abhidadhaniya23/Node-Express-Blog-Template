const express = require('express')
const blogRouter = express.Router()
const fetch=require('node-fetch')
const axios = require('axios')
const path = require('path')

// console.log(path.join(__dirname, '../json', 'postsData.json'))

// using middleware
// console.log(path.join(__dirname,'../json','postsData.json'));
// blogRouter.use('/', async (req, res, next) => {
    // try {
    // } catch (error) {
    //     console.log(error);
    // }
    // const response = await fetch('src/json/postsData.json');
    // const user = await response.json();
    // console.log(user);

    // console.log(req.url)
    // next()
// })

blogRouter.get('/', async (req, res) => {
    // let response = await axios.get(path.join(__dirname, '../json', 'postsData.json'))
    // console.log(response);

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