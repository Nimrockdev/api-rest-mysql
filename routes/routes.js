const pool = require('../data/config');

const router = app => {
    // Ruta 1
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    // Ruta 2
    app.get('/users', (request, response) => {
        response.send(users);
    });

}

const users = [{
        id: 1,
        name: "User 1",
        email: "user1@mail.com",
    },
    {
        id: 2,
        name: "User 2",
        email: "user2@mail.com",
    },
];

// Export the router
module.exports = router;