import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js"
import cors from 'cors'
import mongoose from 'mongoose';

//configure env
dotenv.config();

// connectDB();

const app= express();

//middlewares
const MONGO_URI="mongodb+srv://kavinprasanth:Kavin1234@cluster0.komukur.mongodb.net/ecommerce"
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
  "origin":"https://ecommerce-app-frontend-sable.vercel.app"
}))

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

//rest api
app.get("/",(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h1>");
});

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
