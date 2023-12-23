const express = require('express');
require('./config/database');
const app = express();
const userController = require('./controllers/userController');
const petController = require('./controllers/petController');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(userController);
app.use(petController);


app.listen(8080, () => {
    console.log('App running in port 8080');
});