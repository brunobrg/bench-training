const express = require('express');
const productsRoute = require('./app/routes')
const app = express();
const port = 3000;

app.use(express.json());

app.use('/products', productsRoute);

app.listen(3000);