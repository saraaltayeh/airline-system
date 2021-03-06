'use strict';
require('dotenv').config();
const io = require('socket.io-client');
const host = `http://localhost:${process.env.PORT}`;
const {
    faker
} = require('@faker-js/faker');


let flightID = faker.datatype.uuid();

const events_airline = io.connect(`${host}/airline`);
const events = io.connect(host);

events.emit('get-all');

events_airline.on('new-flight', () => {
    setTimeout(() => {
        let tookOff = `Pilot: flight with ID ${flightID} took-off`;
        console.log(tookOff);
        events_airline.emit('took-off', tookOff);
    }, 4000);
});
events.on('new-flight', () => {
    setTimeout(() => {
        let arrived = `Pilot: flight with ID ${flightID} has arrived`;
        console.log(arrived);
        events.emit('Arrived', arrived);
    }, 7000);
});
events.on('flight', (payload) => {
    console.log(payload);
    Object.keys(payload).forEach((id) => {
    console.log(`Pilot:Sorry i didn't catch this flight ID ${id}`);
    });
})
