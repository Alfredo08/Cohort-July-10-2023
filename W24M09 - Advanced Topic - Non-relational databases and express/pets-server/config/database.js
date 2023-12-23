const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pets_db')
    .then((databaseConnection) => {
        console.log('Successfully conected to the database.');
    })
    .catch((error) => {
        console.log('Something went wrong with the connection.');
        console.log(error);
    });