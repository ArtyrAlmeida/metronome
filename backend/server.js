import * as dotenv from "dotenv";
dotenv.config();

// dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { cardsRouter } from "./src/routes/cardsRouter.js";

const port = process.env.PORT;

const app = express();

// config middleware
app.use(express.json());
app.use(cors());

// app middleware
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

// routes
app.use("/api/cards", cardsRouter);

app.get("/", (req, res) => res.redirect("/api/cards"));

// db connection / server initialization
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => console.log(`Running on http://localhost:${port}`));
    })
    .catch(err => console.log(err));