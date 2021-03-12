const myArray = [
    {
        firstName: 'Bruno',
        lastName: 'Pinheiro'
    },
    {
        firstName: 'Erick',
        lastName: 'Keller'
    },
    {
        firstName: 'John',
        lastName: 'Doe'
    }
]

// Method 1: With Map
const transformedArray = myArray.map((item) => {
    return `${item.firstName} ${item.lastName}`;
});
console.log(transformedArray);


// Method 2: Passing by reference
// const joinNameInArray = (array) => {
//     // for (let i=0; i < array.length; i++) {
//     //     obj = array.shift();
//     //     let string = `${obj.firstName} ${obj.lastName}`;
//     //     array.push(string);
//     // }
//     let aux = [...array];
//     for (obj of aux) {
//         let string = `${obj.firstName} ${obj.lastName}`;
//         array.shift();
//         array.push(string);
//     }
// }
// joinNameInArray(myArray);
// console.log(myArray);