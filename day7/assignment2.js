const EventEmitter = require('events');

class UserLogin extends EventEmitter {}

const userLogin = new UserLogin();

const user = {
    name: 'Bruno',
    login: false
}

userLogin.on('connect', (user) => {
    user.login = !user.login
    console.log(`${user.name} connected`);
});

userLogin.on('disconnect', (user) => {
    user.login = !user.login
    console.log(`${user.name} disconnected`);
});


for (let index in [1,2,3,4]) {
    if (user.login) {
        userLogin.emit('disconnect', user);
    } else {
        userLogin.emit('connect', user);
    };
}