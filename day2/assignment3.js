const person = {
    firstName: 'Bruno',
    lastName: 'Pinheiro',
    age: 88
};

const ageClassification = (person) => {
    if (person.age > 60) {
       console.log('third age');
    } else if (person.age > 30) {
        console.log('second age');
    } else {
        console.log('first age');
    }
};

ageClassification(person);