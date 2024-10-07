// const express = require('express')// method-1
const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const database=require("./config/database.js")
const userRoute=require("./routes/userRoute.js")
const { app,server }=require("./socket/socket.js")
const messageRoute=require("./routes/messageRoute.js")
const cookieParser=require("cookie-parser")
// import dotenv from "dotenv"; 
// import connectDB from "./config/database.js";
// import userRoute from "./routes/userRoute.js";
// import messageRoute from "./routes/messageRoute.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { app,server } from "./socket/socket.js";
dotenv.config({});

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:3000',
    credentials:true
};
app.use(cors(corsOption)); 


// routes
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);

server.listen(PORT, ()=>{
    database();
    console.log(`Server listen at port ${PORT}`);
});

