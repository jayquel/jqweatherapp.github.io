let request = require('request');
const argv = require ('yargs').argv;
let city = argv.c || 'tokyo';
let apiKey = 'e92fe81b6261e00adb39f12802690b14';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log (message);
  }
});
