import express from "express";
import foodRoutes from "./router/food.router.js"
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/food", foodRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
