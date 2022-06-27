'use strict';
const Events = require('events');
const eventsPool = new Events();

module.exports = eventsPool;
'use strict';
require('dotenv').config();
const {
    faker
} = require('@faker-js/faker');
const io = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}`;
const systemConnection = io.connect(host);
const airLine = io.connect(`${host}/airLine`);

setInterval(() => {
    let Flight = {
        event: 'new-flight',
        time: faker.date.future(),
        Details: {
            airLine: 'Al ETIHAD',
            flightID: faker.datatype.uuid(),
            pilot: faker.name.firstName() + " " + faker.name.lastName(),
            destination: faker.address.country(),
            status: faker.internet.emoji({
                types: ['food', 'nature']
            })

        }
    }
    let payload = {
        Flight: Flight
    }
    systemConnection.emit("new-Flight", payload);
    airLine.emit("new-Flight", payload);
}, 10000)