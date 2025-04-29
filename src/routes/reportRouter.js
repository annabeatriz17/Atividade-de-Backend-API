const express = require("express");
const router = express.Router();
const reportController = require("./../controllers/reportController");


//Rota para exportar PDF
router.get("/report/pdf", reportController.exportHeroesPDF);


module.exports = router;