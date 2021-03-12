const person = {
    firstName: 'Bruno',
    lastName: 'Pinheiro',
    age: 29,
    addAge: function(value){
        this.age += value;
    }
};

const greeting = (person) => {
    console.log(`Hello ${person.firstName}`);
};

person.addAge(5);

console.log(person);
