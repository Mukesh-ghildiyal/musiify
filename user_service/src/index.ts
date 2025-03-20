import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();
const app= express()

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "Spotify",
    });

    console.log("Mongo Db Connected");
  } catch (error) {
    console.log(error);
  }
};
app.get('/',(req,res)=>{
    res.json({"msg":"success"})
})
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})