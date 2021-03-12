const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("training", "root", 'training', {
    host: "172.17.0.1",
    port: "3306",
    dialect: "mysql"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected");
    } catch(e) {
        console.error(e);
    }
})();

module.exports = sequelize;