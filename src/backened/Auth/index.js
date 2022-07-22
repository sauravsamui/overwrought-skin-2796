const express = require("express");
const connection = require("./db")
const cors = require("cors")
const authRouter = require("./route/auth.route")
require("dotenv").config();
const PORT = process.env.PORT
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.text());


app.use("/auth",authRouter);

app.get("/",(req,res)=>{
    res.send("hello");
})
app.post("/post",(req,res)=>{
    res.send("got it")
})



app.listen(PORT,async()=>{
    try{
      await connection
    }
    catch{
           console.log("failed to connect");
    }
    console.log(`started at ${PORT}`);
})