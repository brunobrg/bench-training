const myPromise = new Promise((resolve, reject) => {
    try {
        resolve();
    } catch (e) {
        reject(e);
    };
});

const mySetTimeout = (interval) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log("Hi from set timeout");
                resolve();
            }, interval)
        } catch(e) {
            reject(e);
        }
    });
}

mySetTimeout(2000)
    .then(() => {
        console.log('after timeout');
    })

const asyncSetTimeout = async (interval = 1000) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log("Hi from asyncSetTimeour");
                resolve(1);
            }, interval)
        } catch(e) {
            reject(e);
        }
    });
}

const myFunc = async () => {
    const result = await asyncSetTimeout(1000);
    console.log(result);
}

myFunc();