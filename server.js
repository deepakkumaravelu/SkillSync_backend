import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express();
dotenv.config();
mongoose.set('strictQuery',true);
const connect = async () =>{

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB.!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

    app.listen(8800, () => {
        connect();
      console.log("Backend server is running on port 8800");
    });