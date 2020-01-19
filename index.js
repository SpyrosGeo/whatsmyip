const axios = require('axios');
const cors = require('cors')
var str = [];
const positionAPI =`http://api.ipstack.com/79.167.136.20?access_key=859a1cfd95bf3caa4bf72598f5922569`;
const proxy = 'https://cors-anywhere.herokuapp.com/'
// const weatherApi = `${proxy}https://api.darksky.net/forecast/7ea5302c22c0f48ee99a2a5278113dbc/${lat},${long}`


function getPosition(){
    return axios.get(positionAPI);
}
  

   getPosition().then((res)=>{
       let lat = res.data.latitude
       let long = res.data.longitude
       let ip = res.data.ip;
       let weatherApi = `${proxy}https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7ea5302c22c0f48ee99a2a5278113dbc/${lat},${long}`
    //    console.log(weatherApi) 
       axios.get(weatherApi)
            .then(res=>{
                console.log(res.data)
            })
       
   }).catch((res)=>{
       console.log(res)
   })