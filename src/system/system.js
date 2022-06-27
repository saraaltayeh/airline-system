'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3050;
const ioSystem = require('socket.io')(PORT);;
const {faker} = require('@faker-js/faker');

const tookOff = ioServer.of('/airline');

tookOff.on('connection', (socket) => {
    socket.on('new-flight', () => {
        tookOff.emit('new-flight');
    });
    socket.on('took-off', detailsFlight2);
});

ioSystem.on('connection', (socket) => {
    socket.on('new-flight', () => {
        detailsFlight1();
        ioSystem.emit('new-flight');
    });
    socket.on('Arrived', detailsFlight3);
    socket.on('Arrived', () => {
        ioSystem.emit('Arrived');
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