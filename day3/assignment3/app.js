const { Animal, Dog, Cat, Fox } = require('./models');

const dog = new Dog('Rex', 4, 'male');
const cat = new Cat('Nyan', 4, 'female');
const fox = new Fox('RabbitHunter', 4, 'female');

// dog
dog.info();
dog.say();

// cat
cat.info();
cat.say();

// fox
fox.info();
fox.say();
fox.say();
fox.say();
fox.say();

// Generic Animal

// const animal = new Animal('Generic', 2, '???');
// animal.say();
// animal.info();
