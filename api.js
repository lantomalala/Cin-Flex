require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
app.use(bodyParser.json());

const url = process.env.DB_URL
mongoose.connect(url);
app.get('/', (req, res) => {
    res.send("hello word");
});
app.listen(3030);

//router import
const postsRoute = require('./rooter/posts'); 
const filmRoute = require('./rooter/film');
const customerRoute = require('./rooter/customer'); 
const rentalRoute = require('./rooter/rental'); 
const paymentRoute = require('./rooter/payment'); 
const staffRoute = require('./rooter/staff'); 

app.use('/posts', postsRoute ); //0
app.use('/film', filmRoute ); //1
app.use('/customer', customerRoute ); //2
app.use('/rental', rentalRoute ); //3
app.use('/payment', paymentRoute ); //4
app.use('/staff', staffRoute ); //5