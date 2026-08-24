import express from 'express'

const app=express()

const port = 4001

//home route
app.get('/',(req,res)=>{
    res.send("welcome to home page")
})
app.get("/login",(req,res)=>{
    res.send("welcome to login page")
})

//listning
app.listen(port,()=>{
    console.log(`This is server port is ${port}`)
})