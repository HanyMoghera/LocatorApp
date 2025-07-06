const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const storRouter = require('./routers/storeRouter');
const connectDB = require('./config/db');


// load env vars 
dotenv.config({path: './config/.env'});

// connect to database 
connectDB();

const app=express();


// bosy parser 
app.use(express.json());

// enable cors 
app.use(cors());


//set static folders 
app.use(express.static(path.join(__dirname,"public")));

app.use("/api/v1/stores",storRouter);


const port = process.env.PORT || 3003;

app.listen(port, ()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode in port ${port}`); 
});