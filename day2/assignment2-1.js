const person = {
    firstName: 'Bruno',
    lastName: 'Pinheiro',
    age: 29
};

const greeting = (person) => {
    console.log(`Hello ${person.firstName}`);
};

const addAge = (person, value) => {
    person.age += value
};

addAge(person, 1);
addAge(person, 2);

console.log(person);
