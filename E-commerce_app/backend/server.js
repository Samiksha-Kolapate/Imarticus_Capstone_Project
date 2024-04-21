/* const express = require('express')   // for es
const colors = require('colors') */

import express from 'express';  // for es6 and later  // creating express server
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config() ;         // in root so not needed to mention path
//dotenv.config({path:''})  

//database config
connectDB();

//rest object 
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

/* // rest api 
app.get('/',(req,res) => {
    res.send({
        message : 'Welcome to ecommerce app project',      // json object
    });
}) */

// rest api 
app.get('/',(req,res) => {
    res.send("<h1>Welcome to ecommerce app </h1>");
})

//PORT
//const PORT = 8080     //FOR node most common 8000 or 8080, for react 3000, for angular 4200
const PORT = process.env.PORT || 8080;     //If any issue in PORT then use by default 8080

//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} MODE port ${PORT}`.bgCyan.white);
});