const EventEmitter = require('events');

class UserLogin extends EventEmitter {}

const userLogin = new UserLogin();

const user = {
    name: 'Bruno',
    login: false
}

userLogin.on('login', (user) => {
    if ( user.login ) {
        console.log(`${user.name} disconnected`);
    } else {
        console.log(`${user.name} connected`);
    };
    user.login = !user.login
});

userLogin.emit('login', user);
userLogin.emit('login', user);
userLogin.emit('login', user);