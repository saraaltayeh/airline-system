'use strict';
const events = require('../events');
const {faker} = require('@faker-js/faker');
require('../system/system');

let flightID = faker.datatype.uuid();

events.on('new-flight', handleTookOff);
function handleTookOff() {
setTimeout(() => {
    let tookOff = `Pilot: flight with ID ${flightID} took-off`;
    console.log(tookOff);
    events.emit('took-off', tookOff);
}, 3000);
}

events.on('new-flight', handleArrived);
function handleArrived() {
setTimeout(() => {
    let arrived = `Pilot: flight with ID ${flightID} has arrived`;
    console.log(arrived);
    events.emit('Arrived', arrived);
}, 7000);

}
