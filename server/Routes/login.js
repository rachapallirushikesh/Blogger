const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const {Customer} = require('./AuthRoutes');

const router = express.Router();
router.use(express.json());
router.use(cors({
    origin : ["https://shopify-ecommerce-1.onrender.com","http://localhost:3000"]
}));

router.post('/',async(req,res)=>{

    const {email, password} = req.body;
    const customer = await Customer.findOne({email});

    if(!customer) return res.status(400).json({
        message:"Invalid Email or Password"
    });

    const validPassword = await bcrypt.compare(password, customer.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    const token = jwt.sign({_id:customer._id,name:customer.name},process.env.jwtPrivateKey);
    console.log(customer);
    res.send({bool:true,token});
    
});


module.exports = router;