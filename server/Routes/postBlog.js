const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const verify = require('../middleware/verify');
// const bcrypt = require('bcrypt');
// const { Customer } = require('./AuthRoutes');
const cors = require('cors');

router.use(express.json());
router.use(cors({
    origin: ["https://shopify-ecommerce-1.onrender.com", "http://localhost:3000"]
}));

const customerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required:true
    },
    content:{
        type:String,
        required: true
    }
});

const BlogData = mongoose.model('PostData', customerSchema);

router.post('/',verify,async(req,res)=>{

    const {title,url,name,content} = req.body;

    async function add(title,url,name,content){
        const blog = new BlogData({
            title,
            url,
            authorName: name,
            content
        });
        const result = await blog.save();
        res.send(result);
        console.log(result);
    }
    add(title,url,name,content);
});

router.get('/',verify,async(req,res)=>{
    try{
        console.log('get');
        const user = req.user;
        const result = await BlogData.find({authorName:user.name});
        res.json(result);
        console.log(user.name);
    }
    catch(err){
        res.status(500).send(error.message);
    }
});

router.put('/',verify,async(req,res)=>{
    try{
        const {title,url,name,content} = req.body;
        console.log('put');
        const user = req.user;
        const result = await BlogData.findOne({authorName:name});
        console.log(result);
        if (!result) {
            return res.status(404).send('User not found');
        }
        result.title=title;
        result.url=url;
        result.authorName=name;
        result.content=content;
        await result.save();
        res.status(200).send(result);
        console.log(user.name);
    }
    catch(err){
        res.status(500).send(error.message);
    }
});

router.delete('/:id',verify,async(req,res)=>{
    try{
        // const {title,url,name,content,id} = req.body;
        const {id} = req.params;
        console.log('delete');
        const deletedBlog = await BlogData.findByIdAndDelete(id);
        if (!deletedBlog) return res.status(404).send('Blog post not found');
        res.send(deletedBlog);
    }
    catch(err){
        res.status(404).send(err);
    }
});

module.exports = {
    blogData:router,
    BlogData:BlogData
};