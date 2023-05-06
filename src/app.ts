import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// import { config } from 'dotenv'
// config();


import adminRouter from "./routes/Admin";
import LandLordRouter from "./routes/LandLord";
import PropertyRouter from "./routes/Property";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;
// const server: string = process.env.CONNECT_DATABASE!

app.use(adminRouter);
app.use(LandLordRouter);
app.use(PropertyRouter);

mongoose.connect("mongodb+srv://admin:admin@shubhani1.a80ahjo.mongodb.net/Shubhani-DataBase?retryWrites=true&w=majority")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is started at ${PORT}`);
    });
  });
