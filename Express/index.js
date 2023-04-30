const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.end("Hello this is Main Page it is !!!!");
})

app.get("/about",(req,res)=>{
    res.write("<h1>This is the About us Page </h1>");
    res.end();
})


app.get("/more",(req,res)=>{
    res.sendFile(__dirname+"/abc.html");

})

app.listen(3000,()=>{
    console.log("Server Started at Port Number 3000");
})