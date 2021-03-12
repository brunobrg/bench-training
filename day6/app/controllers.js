const { Product } = require('./models');

const findAll = async (request, response) => {
    products = await Product.findAll();
    console.log(products);
    response.send(products);
}