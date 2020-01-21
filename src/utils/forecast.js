const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4c94013c21c23cc2fc3fa88192c8b52c/'+latitude+','+longitude+'?units=si';
    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } 
        else if (body.error) {
            callback('Unable to find location');
        }
        else {
            var curr = body.currently;
            callback(null, body.daily.data[0].summary+' It is currently '+curr.temperature+' degrees out. There is a '+curr.precipProbability+'% chance to rain.');
        }
    });
}


module.exports = forecast;