import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

//Listen
app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server is up! PORT : ${PORT} `)
})

// Router
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);


//GET APIs
// app.get("/", (req, res) => {
//     res.send(`<h1>Hello! The port numer is ${PORT}</h1>`)
// })
