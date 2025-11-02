const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

PORT=process.env.PORT;


mongoose.connect(process.env.MONGODB_URI)
        .then(()=> console.log(`connected to MONGODB, https://localhost:${PORT}`))
        .catch((err)=>{
            console.log(`Your error is ${err}`,err)
        })
 