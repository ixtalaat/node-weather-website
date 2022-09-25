const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1ed6e6485290cf117d39d9c2a5d3b93a&query=${latitude},${longitude}&units=m`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find Location', undefined);
        } else {
            callback(
                undefined,
                `${body.current.weather_descriptions[0]}. It is  currently ${body.current.temperature} degrees out. it feel like ${body.current.feelslike} degrees out. wind speed is ${body.current.wind_speed}. The humidity is ${body.current.humidity}%.`
            );
        }
    });
};

module.exports = forecast;
