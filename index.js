
const express=require("express")
const {connection}=require("./db")
require('dotenv').config()
var cors = require('cors')
const {triprouter} = require("./routes/trip")
const app=express()
app.use(express.json())
app.use(cors())


app.use("/api",triprouter)

app.get("/",(req,res)=>{
    res.send({msg:"working"})
})
app.listen(process.env.port,async(req,res)=>{
    try{
         await connection;
         console.log("connected to database")
    }catch(err)
    {
        console.log("Error while at listnig and connecting")
    }
    console.log("server is running at port 4500")
})