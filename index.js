import express from "express";
import bootsrap from "./src/app.controller.js"
import dotenv from "dotenv"
dotenv.config()
const app = express()
const port = 3000
await bootsrap(app , express)

app.listen(port, () => {
    console.log("connected to server successful"+port)
})