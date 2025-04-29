const heroesModel = require("../models/heroesModel");

const getAllHeroes = async (req, res) => {
    try {
        const { name_characters } = req.query;
        const heroes = await heroesModel.getAllHeroes(name_characters);
        res.json(heroes);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar heroes!"});
    }
};

const getHeroesById = async (req, res) => {
    try {
        const heroes = await heroesModel.getHeroesById(req.params.id);
        if (!heroes) {
            res.status(404).json({message: "Heroi não encontrado!"});
        }
        res.json(heroes);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar heroi!"});
    }
};

const createHero = async (req, res) => {
    try {
        const { name_characters, publishers_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newHero = await heroesModel.createHero(name_characters, publishers_id, photo);
        res.status(201).json(newHero);
    } catch (error) {
        res.status(500).json({error: "Erro ao criar heroi!"});
    }
};

const updateHero = async (req, res) => {
    try {
        const { name_characters, publishers_id } = req.body;
        const updateHero = await heroesModel.updateHero(req.params.id, name_characters, publishers_id);
        if (!updateHero) {
            res.status(404).json({message: "Heroi não encontrado!"});
        }
        res.json(updateHero);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar heroi!"});
    }
};

const deleteHero = async (req, res) => {
    try {
        const message = await heroesModel.deleteHero(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({error: "Erro ao deletar heroi!"});
    }
};

module.exports = { getAllHeroes, getHeroesById, createHero, updateHero, deleteHero };