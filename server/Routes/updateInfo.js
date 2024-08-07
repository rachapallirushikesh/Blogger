const express = require('express');
const router = express.Router();
const verify = require('../middleware/verify');
const bcrypt = require('bcrypt');
const { Customer } = require('./AuthRoutes');
const cors = require('cors');

router.use(cors({
    origin: ["https://shopify-ecommerce-1.onrender.com", "http://localhost:3000"]
}));

router.put('/', verify, async (req, res) => {
    try {
        const { name, number, gender, password } = req.body;
        const user = req.user;

        const result = await Customer.findById(user._id);
        if (!result) {
            return res.status(404).send('User not found');
        }

        result.name = name;
        result.number = number;
        result.gender = gender;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            result.password = hash;
        }

        await result.save();

        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = {
    modifyData: router
};
