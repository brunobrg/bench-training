class User {
    static adultAge = 18;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.createdAt = new Date();
    }
    
    isAdult() {
        return this.age >= User.adultAge;
    }
}

const user = new User("Rafael", 28);
console.log(user.name);
console.log(user.isAdult());
// class User {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.createdAt = new Date();
//     }
    
//     static adultAge = 18;
    
//     isAdult() {
//       return this.age >= adultAge;
//     }
//    }

//    const user = new User("Rafael", 28);
//    console.log(user.name); // Rafael
//    console.log(user.isAdult()); // true