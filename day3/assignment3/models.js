class Animal {
    constructor(name, numberOfPaws, gender) {
        this.name = name;
        this.numberOfPaws = numberOfPaws;
        this.gender = gender;
    }

    say() {
        throw new Error('Not Implemented!');
    }
    info() {
        throw new Error('Not Implemented!');
    }
}

class Dog extends Animal {
    say() {
        console.log('Woof !!');
    }
    info() {
        console.log('Doggy\'s Info')
    }
}

class Cat extends Animal {
    say() {
        console.log('Meow Meow');
    }
    info() {
        console.log('Kitty\'s Info')
    }
}

class Fox extends Animal {
    constructor(name, numberOfPaws, gender) {
        super(name, numberOfPaws, gender);
        this.counter = 0;
    }
    say() {
        switch (this.counter%4) {
            case 0:
                console.log('Ring-ding-ding-ding-dingringding!');
                break;
            case 1:
                console.log('Wa-pa-pa-pa-pa-pow!');
                break;
            case 2:
                console.log('Hatee-hatee-hatee-ho!');
                break;
            case 3:
                console.log('Joff-tchoff-tchoff-tchoff!');
                break;
        }
        this.counter += 1;
    }
    info() {
        console.log('Foxxy\'s Info')
    }
}

module.exports = {
    Animal,
    Cat,
    Dog,
    Fox
}