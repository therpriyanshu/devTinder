const express=require("express")
const app=express()

//Order matters
app.use("/hello/xyz",(req,res)=>{
    res.send("Hello")
})

app.use("/hello",(req,res)=>{
    res.send("Helloo")
})


app.use("/hii",(req,res)=>{
    res.send("Hiiii")
})

//ab+c , ab*cd , ab?c, a(bc)?d
app.get("/abc/:userId",(req,res)=>{ // /a/ regex can also work as a path
    // console.log(req.query)
    console.log(req.params)
    res.send({firstName:"Priyanshu" , lastName:"Kumar"})
})

app.use("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(7777,()=>{
    console.log("Server is running")
})
