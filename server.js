require("dotenv").config();
const express = require("express");
const cors = require("cors");
const publishersRoutes = require("./src/routes/publishersRoutes");
const heroesRoutes = require("./src/routes/heroesRoutes");
const reportRoutes = require("./src/routes/reportRouter");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", publishersRoutes);
app.use("/api", heroesRoutes);
app.use("/api", reportRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`😘💕 Servidor rodando em http://localhost:${PORT}`);
});
