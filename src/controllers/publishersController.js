const publishersModel = require("../models/publishersModel");

const getAllPublishers = async (req, res) => {
    try {
        const publishers = await publishersModel.getAllPublishers();
        res.json(publishers);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar editores!"});
    }
};

const getPublishersById = async (req, res) => {
    try {
        const publishers = await publishersModel.getPublishersById(req.params.id);
        if (!publishers) {
            res.status(404).json({message: "Editora não encontrada!"});
        }
        res.json(publishers);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar editora!"});
    }
};

const createPublisher = async (req, res) => {
    try {
        const { name, teams } = req.body;
        const newPublisher = await publishersModel.createPublisher(name, teams);
        res.status(201).json(newPublisher);
    } catch (error) {
        res.status(500).json({error: "Erro ao criar editora!"});
    }
};

const updatePublisher = async (req, res) => {
    try {
        const { name, teams } = req.body;
        const updatedPublisher = await publishersModel.updatePublisher(req.params.id, name, teams);
        if (!updatedPublisher) {
            res.status(404).json({message: "Editora não encontrada!"});
        }
        res.json(updatedPublisher);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar editora!"});
    }
};

const deletePublisher = async (req, res) => {
    try {
        const deletedPublisher = await publishersModel.deletePublisher(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(200).json({error: "Editora deletada com sucesso!"});
    }
};

module.exports = { getAllPublishers, getPublishersById, createPublisher, updatePublisher, deletePublisher };