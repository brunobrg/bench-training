const { User } = require('./models');

const user = new User('Bruno', 29);

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}