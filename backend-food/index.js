import express from "express";
import cors from "cors"
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import protectedRoute from './routes/protectedRoute.js';
import foodRoutes from './routes/foodRoutes.js';
import jwt from 'jsonwebtoken';
import verifyToken from "./middleware/authMiddleware.js";
import { Users } from "./models/user.js";

//const user = require('../server/routes/user.js')
const app=express()
app.use(express.json());
app.use(cors())
app.get('/',(req,res)=>{
    console.log(req)
   return res.status(234).send('Welcome To Mern Stack Project')
})

//routes
app.use("/users",userRoutes);
app.use("/protected",protectedRoute);
app.use("/food",foodRoutes);
app.use("/images",express.static('uploads'))
//app.use("/favorites",favoriteRoutes);

//connection
mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('MongoDB Connected');
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    });
})
.catch((err)=>{
    console.log(err)
})
