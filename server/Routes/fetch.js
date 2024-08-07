const express = require('express');
const router = express.Router();
const {BlogData} = require('./postBlog');
const cors = require('cors');
router.use(cors({
    origin : ["https://shopify-ecommerce-1.onrender.com","http://localhost:3000"]
}));

router.get('/',async(req,res)=>{
    try{
        console.log('GET /blogs route hit');
        const result = await BlogData.find();
        console.log(result);
        res.send(result);
    }
    catch(err){
        res.status(404).send(err.message);
    }
});

module.exports = router;