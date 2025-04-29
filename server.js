require("dotenv").config();
const express = require("express");
const cors = require("cors");
const publishersRoutes = require("./src/routes/publishersRoutes");
const heroesRoutes = require("./src/routes/heroesRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/publishers", publishersRoutes);
app.use("/heroes", heroesRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(process.env.PORT || 3000, () => {
    console.log(`😘💕 Servidor rodando em http://localhost:${PORT}`);

});