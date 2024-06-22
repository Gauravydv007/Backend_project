import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))   // it is use to set middleware and cors

app.use(express.json({limit: "16kb"}))   // use to limit the data in json form 
app.use(express.urlencoded({extended: true, limit: "16kb"})) // use to encoded the special character for url
app.use(express.static("public")) // to make something public



export {app}



