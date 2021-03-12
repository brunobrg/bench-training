const retrieveAgeFromJson = (jsonString) => {
    let obj;
    try {
        obj = JSON.parse(jsonString);
        console.log(obj);
        if ('age' in obj) {
            return Number(obj.age);
         }
    } catch {
        throw new Error('My custom error');
    } 

    return 0;
}

const receiveRandomParams = (...args) => {
    let totalAge = 0;
    for (value of args) {
        if (typeof(value) == 'string') {
            totalAge += retrieveAgeFromJson(value);
        }
    }
    return totalAge;
};

const result = receiveRandomParams(15,'{"name": "John"}',"",'{"age":"30"}','{"age": "45"}')

console.log(result)
