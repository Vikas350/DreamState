import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'

// config env variables
dotenv.config()
 
//create express app
const app = express();
const port = process.env.PORT

//connect the mongodb database
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB database is connected to the server.')
}).catch((err) => {
    console.log(err)
})

// start the server on PORT
app.listen(port, () => {
    console.log('Server is running on port 3000')
})

// create the route
app.use('/server/user', userRouter)