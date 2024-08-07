const express = require('express');
const router = express.Router();
const verify = require('../middleware/verify');
const {Customer} = require('./AuthRoutes');
const cors = require('cors');
router.use(cors({
    origin : ["https://shopify-ecommerce-1.onrender.com","http://localhost:3000"]
}));

router.get('/',verify,async(req,res)=>{
    const user = req.user;
    const result = await Customer.findById(user._id);
    res.json({
        email: result.email,
        name: result.name,
        number: result.number,
        gender: result.gender,
    });
    console.log(result);
});

module.exports = {
    getData:router
}