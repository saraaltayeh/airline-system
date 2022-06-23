'use strict';
const events = require("../events");
const { faker } = require('@faker-js/faker');
require('../pilot/pilot');

events.on('new-flight', detailsFlight1);
events.on('took-off', detailsFlight2);
events.on('Arrived', detailsFlight3);


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
