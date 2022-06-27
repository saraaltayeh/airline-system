'use strict';
require('dotenv').config();
const io = require('socket.io-client');
const host = `http://localhost:${process.env.PORT}`;
const {faker} = require('@faker-js/faker');


let pilotName = faker.name.userName();
let country = faker.address.cityName();

const events_airline = io.connect(`${host}/airline`);
const events = io.connect(host);

setInterval(() => {
    function flight1() {
        console.log(`Manager: we are greatly thankful for the amazing flight, ${pilotName}`);
    }
    events.on('Arrived', flight1);

    let flight2 = `Manager: new flight with ID ${country} have been scheduled`;
    console.log(flight2);
    events_airline.emit('new-flight');
    events.emit('new-flight');
}, 10000);
