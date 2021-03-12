const sum = (...args) => {
    if (args.length < 2) throw new Error('At least 2 arguments required');
    return Object.values(args).reduce((prev, cur) => (prev += cur));
}

const double = async (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = parseInt(value, 10);
            if ( !value || isNaN(num) ) reject();
            resolve(num*2);
        }, 900);
    });
}

module.exports = {
    sum,
    double
}