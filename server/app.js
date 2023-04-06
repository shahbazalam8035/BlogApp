const express = require("express");
const app =express();
const cors=require("cors");
const morgan = require("morgan")
const dotenv=require("dotenv")

// env config 
dotenv.config();

// router import
const userRoutes=require("./routes/userRouter")
const blogRoutes=require("./routes/blogRoutes")

// mogodb connection
require("./db/conn")

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/blog",blogRoutes)

// port
const PORT = process.env.PORT || 8000

// listen
app.listen(PORT,()=>{
    console.log(`connection successful at ${process.env.DEV_MODE} mode on port ${PORT}`);
})