const pool = require('./../database/config');

const getTodosByUser = (data) => {
    const nativeQuery = `
        SELECT description, status
        FROM todos JOIN users
            ON todos.user_id = users.id
        WHERE users.id = $1;`;
    
    return pool.query(nativeQuery, data);
}

const Todos = {
    getTodosByUser
};

module.exports = Todos;