const pool = require('../data/config');

const router = app => {

    // Ruta 1
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    // Ruta 2, toda la lista
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) {
                throw error;
            } else {
                response.send(result);
            }
        });
    });

    // Ruta 3, con filtro ID
    app.get('/users/:id', (request, response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
            if (error) {
                throw error;
            } else {
                response.send(result);
            }
        });
    });

    // Ruta 4, insertar
    app.post('/users', (request, response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if (error) {
                throw error;
            } else {
                response.status(201).send(`User added with ID: ${result.insertId}`);

            }
        });
    });

    // Ruta 5, insertar/actualizar
    app.put('/users/:id', (request, response) => {
        const id = request.params.id;

        pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    });

}



// Export the router
module.exports = router;