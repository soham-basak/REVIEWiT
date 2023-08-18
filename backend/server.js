import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const port = process.env.PORT || 5000;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/movies", movieRoutes);
app.use("/api/movies", reviewRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Currently in dev mode");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
