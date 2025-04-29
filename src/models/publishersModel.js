const pool = require("../config/database");

const getAllPublishers = async () => {
    const result = await pool.query("SELECT * FROM publishers");
    return result.rows;
};

const getPublishersById = async (id) => {
    const result = await pool.query("SELECT * FROM publishers WHERE id = $1", [id]);
    return result.rows[0];
};

const createPublisher = async (name, teams) => {
    const result = await pool.query(
        "INSERT INTO publishers (name, teams) VALUES ($1, $2) RETURNING *", [name, teams]);
        return result.rows[0];
};

const updatePublisher = async (id, name, teams) => {
    const result = await pool.query(
        "UPDATE publishers SET name = $1, teams = $2 WHERE id = $3 RETURNING *", [name, teams, id]
    );
    if (result.rowCount === 0) {
        return {error: "Editora não encontrada!"};
    }
        return result.rows[0];
};

const deletePublisher = async (id) => {
    const result = await pool.query("DELETE FROM publishers WHERE id = $1 RETURNING *", [id]
    );
    if (result.rowCount === 0) {
        return {error: "Não foi possível deletar o editora!"};
    }
    return {message: "Editora deletada com sucesso!"};
};

module.exports = { getAllPublishers, getPublishersById, createPublisher, updatePublisher, deletePublisher };