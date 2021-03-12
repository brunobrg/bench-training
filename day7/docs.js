const EventEmitter = require("events");

class DollarExchangeRate extends EventEmitter {}

const dollarExchangeRate = new DollarExchangeRate();

dollarExchangeRate.on("increased", () => {
    console.log("Doolar is higher");
})


dollarExchangeRate.emit("increased", "");
console.log("after the method of the listener");

