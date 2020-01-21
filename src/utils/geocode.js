const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3RlZmFub3NkZXYiLCJhIjoiY2s1aHRtdmowMDZ1aTNuczYwOTRheWV6ZSJ9.NYxMtHSEZ2DwfnjxMyaP3w&limit=1';
    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geocoding service!');
        } 
        else if (body.features.length===0) {
            callback('Unable to perform geocoding');
        }
        else {
            var item = body.features[0];
            callback(null, {
                location: item.place_name,
                latitude: item.center[1],
                longitude: item.center[0]
            });
        }
    });
}

module.exports = geocode;