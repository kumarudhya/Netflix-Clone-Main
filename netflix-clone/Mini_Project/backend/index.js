import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv"
import DBconfig from "./config/DBconfig.js";
import User from "./router/user.routes.js"
dotenv.config();
const app =express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}))
DBconfig()

app.use("/api",User)


app.get("/",(req,res)=>{
    res.send("Hello World")
})
const port = process.env.PORT || 5500
app.listen(port,()=>{
    console.log("server connected@"+port);
})