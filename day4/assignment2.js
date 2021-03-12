const waitTo = (ms) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('done!')
            }, ms);
        } catch (e) {
            reject(e);
        }
    });
};

waitTo(2000)
    .then((s) => {
        console.log(s);
    });