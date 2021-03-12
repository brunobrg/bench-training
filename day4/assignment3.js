const doIt = (num = 0) => {
    setInterval(() => {
        console.log(num);
        num += 1;
    }, 1200);
};

doIt();