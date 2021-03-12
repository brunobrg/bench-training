const {Sequelize} = require('sequelize');
const sequelize = new Sequelize("training", "root", 'training', {
    host: "db",
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