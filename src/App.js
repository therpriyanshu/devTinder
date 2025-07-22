const express=require("express")
const app=express()

app.use("/hello",(req,res)=>{
    res.send("Hello from the server")
})

app.use("/test",(req,res)=>{
    res.send("Mic check")
})

app.use("/",(req,res)=>{
    res.send("namaste from dashboard")
})

app.listen(7777,()=>{
    console.log("Successfully running")
});
