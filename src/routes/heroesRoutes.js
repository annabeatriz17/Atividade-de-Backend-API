const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroesController");
const upload = require("../config/upload");


router.get("/heroes", heroesController.getAllHeroes);
router.get("/heroes/:id", heroesController.getHeroesById);
router.post("/heroes", upload.single("photo"), heroesController.createHero);
router.put("/heroes/:id", heroesController.updateHero);
router.delete("/heroes/:id", heroesController.deleteHero);

module.exports = router;