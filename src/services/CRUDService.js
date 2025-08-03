const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM users`);
    return results;    
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM users WHERE id = ?`, [id]
    );
    let user = results && results.length > 0 ? results[0] : {};
    return user;
};

const createUser = async (email, name, city) => {
    let [results, fields] = await connection.query(
        `INSERT INTO users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );
    return results;
}

const updateUser = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `UPDATE users SET email = ?, name = ?, city = ? WHERE id = ?`,
        [email, name, city, id]
    );
    return results;
}

const deleteUserById = async (id) => {
        let [results, fields] = await connection.query(
        `DELETE FROM users WHERE id = ?`,
        [id]
    );
    return results;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById
}