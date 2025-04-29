const express = require("express");
const router = express.Router();
const reportController = require("./../controllers/reportController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);

//Rota para exportar PDF
router.get("/report/pdf", reportController.exportHeroesPDF);


module.exports = router;