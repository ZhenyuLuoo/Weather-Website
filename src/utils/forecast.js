const request = require('request')

const forecast = (location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=07c3a07182527de7cc017d3435eb37fa&query=' + location

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast