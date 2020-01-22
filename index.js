#!/usr/bin/env node
const axios = require('axios');
const coords ={};
const positionAPI =`http://gd.geobytes.com/GetCityDetails`;


function getPosition(){
    return axios.get(positionAPI);
}
  

  getPosition().then((res)=>{
    
    coords.ip = res.data.geobytesremoteip;
     return coords;
       
   }).catch((res)=>{
       console.log(res)
   }).then((coords)=>{
      returnedCords(coords);
   })


   const returnedCords = (coords)=>{
    let {ip} = coords 
    console.log(ip)
   }
   