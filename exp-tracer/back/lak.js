
// server using nodejs

/*
const http = require('http');

const server = http.createServer((req, res)=>
{
    console.log("Server created");
    res.end("hello radhe Krishna")
})

server.listen(3500, "localhost",()=>
{
    console.log("Server is running on 3500");
}) 

*/



// server using express.js


const express = require("express");
const app = express();
const port = 3500;
const mongoose = require("mongoose");
const mongUrl = require(" mongodb+srv://lakshitagarg577:radhe0040krishna@cluster0.9r2narp.mongodb.net/?retryWrites=true&w=majority");


require("./models/model.js")
app.use(express.json())
app.use(require("./routes/garg"))

mongoose.connect(mongUrl);

mongoose.connection.on("connected",()=>{
    console.log("Successfully connected to mongo");
})


mongoose.connection.on("error",()=>{
    console.log("not connected to mongo");
})

app.listen(port,()=>{
    console.log("Server is running on "+"  " +port);
})