const returnArray = async () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => resolve([1,2,3,4,5,6]), 2000);
        } catch(e) {
            reject(e);
        }
    });
};

const asyncIterate = async () => {
    const array = await returnArray();
    for (let value in array) {
        console.log(value);
    }
}

asyncIterate();
