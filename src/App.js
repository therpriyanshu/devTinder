const express=require("express")
const app=express()

//Order matters
app.use("/hello",(req,res)=>{
    res.send("Helloo")
})

app.use("/hello/xyz",(req,res)=>{
    res.send("Hello")
})


app.use("/hii",(req,res)=>{
    res.send("Hiiii")
})

app.use("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(7777,()=>{
    console.log("Server is running")
})
