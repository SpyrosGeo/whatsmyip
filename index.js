#!/usr/bin/env node
const axios = require('axios');
const coords = {};
const chalk = require('chalk');
const positionAPI = `http://ifconfig.me/`;


function getPosition() {
  return axios.get(positionAPI);
}


getPosition().then((res) => {
  coords.ip = res.data
  return coords;

}).catch((res) => {
  console.log(res)
}).then((coords) => {
  returnedCords(coords);
})


const returnedCords = (coords) => {
  let { ip } = coords
  console.log(chalk.bgBlack.white(ip))
}
