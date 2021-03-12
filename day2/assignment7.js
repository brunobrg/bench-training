const arrayOfNumbers = [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43];

arrayOfNumbers.sort((a, b) => {
    if ((a % 2 === 0 && b % 2 === 0) || (a % 2 === 1 && b % 2 === 1)) {
        return a - b;
    } else {
        return a % 2 === 0 ? -1 : 1;
    }
})
console.log(arrayOfNumbers);