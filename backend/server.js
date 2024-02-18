import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Parse to JSON
app.use(express.json());

//Listen
app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server is up! PORT : ${PORT} `)
})

// Router
app.use("/api/auth", authRoutes)


//GET APIs
// app.get("/", (req, res) => {
//     res.send(`<h1>Hello! The port numer is ${PORT}</h1>`)
// })
