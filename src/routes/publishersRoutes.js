const express = require("express");
const router = express.Router();
const publishersController = require("../controllers/publishersController");



router.get("/publishers", publishersController.getAllPublishers);
router.get("/publishers/:id", publishersController.getPublishersById);
router.post("/publishers", publishersController.createPublisher);
router.put("/publishers/:id", publishersController.updatePublisher);
router.delete("/publishers/:id", publishersController.deletePublisher);

module.exports = router;