const express = require('express');

const productsRoute = require('./app/routes')
const sequelize = require('./app/database');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/products', productsRoute);
app.get('/', (request, response) => {
    response.send('Welcome to root!');
});

sequelize.sync()
    .then(result => {
        app.listen(port);
    })
    .catch(err => {
        console.log(err);
    });