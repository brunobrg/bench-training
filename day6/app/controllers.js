const { Product } = require('./models');


class ProductController {
    async list (request, response) {
        try {
            const products = await Product.findAll();
            console.log(products);
            response.send(products);
        } catch (e) {
            console.log(e);
            response.status(500).send(e.message);
        }
    }

    async add (request, response) {
        const product = request.body;
        try {
            console.log(product);
            const new_product = await Product.create(product);
            response.send(new_product);
        } catch (e) {
            console.log(e);
            response.status(500).send(e.message);
        }
    }

    async get (request, response) {
        const { id } = request.params;
        try {
            const product = await Product.findByPk(id);
            response.send(product);
        } catch (e) {
            console.log(e);
            response.status(500).send(e.message);
        }
    }

    async update (request, response) {
        const { id } = request.params;
        const new_values = request.body;
        try {
            const product = await Product.findByPk(id);
            for (let [key, value] of Object.entries(new_values)) {
                product[key] = value    
            }
            console.log(product);
            await product.save();
            response.send(product);
        } catch (e) {
            console.log(e);
            response.status(500).send(e.message);
        }
    }

    async delete (request, response) {
        const { id } = request.params;
        try {
            const product = await Product.findByPk(id);
            await product.destroy();
            response.send({ success: true });
        } catch (e) {
            response.status(500).send(e.message);
        }
    }
}

const productController = new ProductController();

module.exports = productController