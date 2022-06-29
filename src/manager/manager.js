'use strict';
require('dotenv').config();
const io = require('socket.io-client');
const host = `http://localhost:${process.env.PORT}`;
const {
    faker
} = require('@faker-js/faker');


let pilotName = faker.internet.userName();
let country = faker.address.cityName();

const events_airline = io.connect(`${host}/airline`);
const events = io.connect(host);

const flights = {
    event: 'new-flight',
    details: {
        time: faker.date.past(),
        id: faker.datatype.uuid(),
        pilot: faker.internet.userName(),
        destination: faker.address.city(),
    }
}

setInterval(() => {
    function flight1() {
        console.log(`Manager: we are greatly thankful for the amazing flight, ${pilotName}`);
    }
    events.on('Arrived', flight1);

    let flight2 = `Manager: new flight with ID ${country} have been scheduled`;
    console.log(flight2);
    events_airline.emit('new-flight', flights);
    events.emit('new-flight', flights);
}, 10000);