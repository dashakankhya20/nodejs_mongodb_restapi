import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//testing a route
app.get("/", (req, res) => {
  res.send("Testing routes");
});

//routes
app.use("/api", userRouter);

//database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`An error occurred: ${error}`);
  });
