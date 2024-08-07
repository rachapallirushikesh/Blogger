const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const router = express.Router();
router.use(express.json());
router.use(cors({
    origin: ["https://blogger-1-xt28.onrender.com", "http://localhost:3000"]
}));

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required:true
    },
    gender:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model('Customer', customerSchema);

router.post('/', async (req, res) => {
    try{
        const {email, name, number, password, gender} = req.body;
        console.log(req.body);

        const existingCustomer = await Customer.findOne({email});
        if (existingCustomer) return res.status(400).send('User already exists');

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        async function createCustomer(email, name, number, hash, gender) {
            
            const customer = new Customer({
                email,
                name,
                number,
                gender,
                password: hash
            });

            const result = await customer.save();
            console.log(result);
            res.send(true);
        }

        createCustomer(email, name, number, hash, gender);
    }
    catch(err){
        res.send('hello');
    }
});

module.exports = {
    Customer: Customer,
    router: router
};