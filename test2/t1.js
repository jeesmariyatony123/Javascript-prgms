weatherData = {

    coord: {
        lon: 72.8479,

        lat: 19.0144
    },

    weather: [ {id: 711, main: "Smoke",description: "smoke",icon: "50n"} ],

    base: "stations",

    main: {temp: 82.38, feels_like: 83.86, temp_min: 82.38, temp_max: 82.38,

        pressure: 1009,

        humidity: 54

    },

    visibility: 2500,

    wind: {

        speed: 4.61,

        deg: 170

    },

    clouds: {

        all: 0

    },

    dt: 1669572570,

    sys: {

        type: 1,

        id: 9052,

        country: "IN",

        sunrise: 1669512183,

        sunset: 1669552175

    },

    timezone: 19800,

    id: 1275339,

    name: "Mumbai",

    cod: 200

}

console.log(`country: ${weatherData.sys["country"]} and place: ${weatherData.name}`);

console.log(`temperature: ${weatherData.main["temp"]} and minimum temperature: ${weatherData.main["temp_min"]}`);

console.log(`wind speed: ${weatherData.wind["speed"]} and pressure: ${weatherData.main["pressure"]}`);