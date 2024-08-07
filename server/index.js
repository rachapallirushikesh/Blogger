const express = require("express");
const mongoose = require('mongoose');
const app = express();
const {router} = require('./Routes/AuthRoutes.js');
const login = require('./Routes/login.js');
const {getData} = require('./Routes/getCustomerData.js');
const {modifyData} = require('./Routes/updateInfo.js');
const {blogData} = require('./Routes/postBlog.js');
const getAllData = require('./Routes/fetch.js');

const dontev = require('dotenv');
dontev.config();
app.use(express.json());
app.use('/customerData',router);
app.use('/customerValidation',login);
app.use('/getCustomerData',getData);
app.use('/edit-profile',modifyData);
app.use('/postBlogData',blogData);
app.use('/blogs',getAllData);

mongoose.connect(process.env.mongo_url)
        .then(()=>console.log('connected to database'))
        .catch((error)=>console.error(error));

const port = process.env.PORT;
app.listen(port,()=>console.log(`Listening at port ${port}...`));