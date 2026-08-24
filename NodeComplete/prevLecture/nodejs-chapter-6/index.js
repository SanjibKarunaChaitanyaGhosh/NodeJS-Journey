import express from 'express'
import dotenv from 'dotenv'
import router from './routes/route.js'

const app=express()
dotenv.config()

const PORT=process.env.PORT

//routing - endPoints - if we want to protect this have to use middleware
app.use("/api",router)

app.get('/',(req,res)=>{
    res.send("Welcome to home page")    
})

app.listen(PORT,()=>{
    console.log("The server is running.....")
})