const User = class {
    static info = 'This is the user class'
    constructor(name, age, und = undefined, blind = false, nil = null) {
        this.name = name;
        this.age = age;
        this.undefined = und;
        this.blind = blind;
        this.nil = nil
    }
    
}

module.exports = {
    User
}