const pool = require("../config/database");

const getAllHeroes = async (name) => {
    if (!name) {
        const result = await pool.query(
            `SELECT heroes.*, publishers.name AS publishers_name
            FROM heroes 
            LEFT JOIN publishers ON heroes.publishers_id = publishers.id`
        );
        return result.rows;
    }else{
        const result = await pool.query(
            `SELECT heroes.*, publishers.name AS publishers_name
            FROM heroes
            LEFT JOIN publishers ON heroes.publishers_id = publishers.id
            WHERE name_characters LIKE $1`, [`%${name}%`]
        );
        return result.rows;
    }
};

const getPublishersById = async (id) => {
    const result = await pool.query(
        `SELECT heroes.*, publishers.name AS publishers_name
        FROM heroes
        LEFT JOIN publishers ON heroes.publishers_id = publishers.id
        WHERE heroes.id = $1`, [id]
    );
    return result.rows[0];
};

const createHero = async (name, publishers_id, photo) => {
    const result = await pool.query(
        "INSERT INTO heroes (name_characters, publishers_id) VALUES ($1, $2, $3) RETURNING *", [name, publishers_id, photo]
    );
    return result.rows[0];
};

const updateHero = async (id, name, publishers_id) => {
    const result = await pool.query(
        "UPDATE heroes SET name_characters = $1, publishers_id = $2 WHERE id = $3 RETURNING *", [name, publishers_id, id]
    );
    if (result.rowCount === 0) {
        return {error: "Heroi não encontrado!"};
    }
    return result.rows[0];
};

const deleteHero = async (id) => {
    const result = await pool.query("DELETE FROM heroes WHERE id = $1 RETURNING *", [id]
    );
    if (result.rowCount === 0) {
        return {error: "Não foi possível deletar o heroi!"};
    }
    return {message: "Heroi deletado com sucesso!"};
};

module.exports = { getAllHeroes, getPublishersById, createHero, updateHero, deleteHero };