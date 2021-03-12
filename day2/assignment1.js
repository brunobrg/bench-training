const person = {
    firstName: 'Bruno',
    lastName: 'Pinheiro',
    age: 29
};

const greeting = (person) => {
    console.log(`Hello, ${person.firstName}`);
};

greeting(person);