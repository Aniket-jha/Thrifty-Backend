import express from "express";
import Connection from "./database/db.js";
import Routes from "./routes/routes.js";
import dotenv from 'dotenv'
import defaultData from "./default.js";
import bodyParser from "body-parser";
import cors from 'cors'
dotenv.config()
const app = express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/', Routes);

const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD

const Port=8000
Connection(username,password)
app.listen(Port,()=>(console.log("Running on port 8000")))
defaultData()