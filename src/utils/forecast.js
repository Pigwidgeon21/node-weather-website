const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9c0fb74690dba845852bb271c5c2116a/' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. The temperture high for the day will be ' + body.daily.data[0].temperatureHigh + 'and the temperature low will be ' + body.daily.data[0].temperatureLow + '.')
        }
    })
}

module.exports = forecast