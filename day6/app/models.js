const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Product extends Model {}
Product.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
        },
    },
    {
        sequelize,
        modelName: "Product",
        timestamps: false,
    }
);


module.exports.Product = Product;