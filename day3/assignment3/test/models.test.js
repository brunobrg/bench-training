const assert = require('assert');

const { Animal, Cat, Dog, Fox } = require('../models');

describe('Animals', () => {
    describe('Animal', () => {
        it('Should create a new animal', () => {
            const test_animal = {
                name: 'test',
                numberOfPaws: 2,
                gender: 'male'
            }
            const animal = new Animal('test', 2, 'male');
            console.log(test_animal);
            console.log(animal);
            assert.deepStrictEqual(test_animal, animal);
        });
    })
})