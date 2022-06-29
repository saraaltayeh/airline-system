'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3050;
const ioSystem = require('socket.io')(PORT);;
const {faker} = require('@faker-js/faker');
const uuid = require('uuid').v4;

const queue = {flights: {}};
const tookOff = ioSystem.of('/airline');

tookOff.on('connection', (socket) => {
    socket.on('new-flight', () => {
        tookOff.emit('new-flight');
    });
    socket.on('took-off', detailsFlight2);
});

ioSystem.on('connection', (socket) => {
    socket.on('new-flight', (payload) => {
        detailsFlight1();
        const id = uuid();
        queue.flights[id] = payload;
        ioSystem.emit('new-flight', payload);
    });
    socket.on('Arrived', detailsFlight3);
    socket.on('Arrived', () => {
        ioSystem.emit('Arrived');
    });
    socket.on('get-all', () => {
        socket.emit('flight', queue.flights);
        queue.flights = {};
    });
});


function detailsFlight1() {
    let detailsFlight1 = {
        Flight: {
            event: 'new-flight',
            time: faker.date.past(),
            Details: {
                airLine: 'Royal Jordanian Airlines',
                destination: faker.address.city(),
                pilot: faker.internet.userName(),
                flightID: faker.datatype.uuid(),
            },
        },
    };
    console.log(detailsFlight1);
}

function detailsFlight2() {
    let detailsFlight2 = {
        Flight: {
            event: 'took_off',
            time: faker.date.past(),
            Details: {
                airLine: 'Royal Jordanian Airlines',
                destination: faker.address.city(),
                pilot: faker.internet.userName(),
                flightID: faker.datatype.uuid(),
            },
        },
    };
    console.log(detailsFlight2);
}

function detailsFlight3() {
    let detailsFlight3 = {
        Flight: {
            event: 'arrived',
            time: faker.date.past(),
            Details: {
                airLine: 'Royal Jordanian Airlines',
                destination: faker.address.city(),
                pilot: faker.internet.userName(),
                flightID: faker.datatype.uuid(),
            },
        },
    };
    console.log(detailsFlight3);
} 