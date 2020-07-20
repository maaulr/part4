const bloglistRouter = require('express').Router()
const Blog = require('../models/blog')
const { response } = require('express')

bloglistRouter.get('/', (request, response)=>{
    Blog
        .find({})
        .then(blogs=>{
            response.json(blogs)
        })
})

bloglistRouter.post('/', (request, response)=>{
    const newblog = new Blog(request.body)

    newblog
        .save()
        .then(result=>{
            response.status(201).json(result)
        })
})

module.exports = bloglistRouter