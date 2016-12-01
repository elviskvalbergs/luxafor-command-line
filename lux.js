"use strict";
const Luxafor = require('luxafor-api');
//const util = require('util');
const sleep = require('sleep');

// api call to change the color
let options = {
    defaults: {
        wave: {
            type: 1,
            speed: 2,
            repeat: 1
        }
    }
};

function bad(device) {
  console.log("bad");
  device.setColor('#f00',0xFF);
}
global.bad = bad;

function medium(device) {
  console.log("medium");
  device.setColor('#f60',0xFF);
}
global.medium = medium;

function good(device) {
  console.log("good");
  device.setColor('#9f0',0xFF);
}
global.good = good;

function police(device) {
  console.log("police");
  var tout = 300000
  for (var i=0; i<5; i++) {
    device.wave('#9f0');
    sleep.usleep(tout);
    device.wave('#9ff');
    sleep.usleep(tout);
  }
}

if (process.argv[2] != undefined) {
  var level = process.argv[2];
  var level2 = process.argv[3];
  console.log("level:" + level);
  var device = new Luxafor(options);
  //console.log(util.inspect(device, false, null));
  //sleep.sleep(1);
  switch (level) {
    case "bad":
      bad(device);
      break;
    case "medium":
      medium(device);
      break;
    case "good":
      good(device);
      break;
    case "police":
      police(device);
      if (level2 != undefined && level2 in global && typeof global[level2] === "function") {
        global[level2](device);
      }
      break;
  }
}
