'use strict';
const events = require('./events')
const {faker} = require('@faker-js/faker');

require('./pilot/pilot');
require('./system/system');

let pilotName = faker.name.userName();
let country = faker.address.cityName();

setInterval(() => {
    function flight1() {
        console.log(`Manager: we are greatly thankful for the amazing flight, ${pilotName}`);
    }
events.on('Arrived', flight1);

let flight2 = `Manager: new flight with ID ${country} have been scheduled`;
    console.log(flight2);
    events.emit('new-flight', flight2);
}, 10000);
