const request = require('request');

var user = `User${ Math.round(Math.random() * 100) }`;
var userEmail = user + '@email.com';
const jsonUser = {
    "name": user,
    "email": userEmail,
};

console.log(jsonUser);

request.post({
    url: 'http://localhost:3002/users',
    body: jsonUser,
    json: true,
}, function(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        console.log(body);
    }

});