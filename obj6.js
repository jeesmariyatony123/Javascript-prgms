weatherData = [
    { district: 'Thrissur', temp: 32 },
    { district: 'Kottayam', temp: 29 },
    { district: 'Palakkad', temp: 34 },
    { district: 'Ernakulam', temp: 33 },
    { district: 'Thrissur', temp: 29 },
    { district: 'Kottayam', temp: 30 },
    { district: 'Palakkad', temp: 32 },
    { district: 'Ernakulam', temp: 31 }
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}



//create empty ouput object
output = {}
//get each item from weatherData
weatherData.forEach(districtDetails => {
    //store district and temp
    const district = districtDetails.district
    const currTemp = districtDetails.temp
    //check district is in output
    if (output.hasOwnProperty(district)) {
        const oldTemp = output[district]
        //district present => compare temp, update district value as its highest value
        if (currTemp >= oldTemp) {
            output[district] = currTemp
        } else {
            output[district] = oldTemp
        }
    } else {
        //district not present => add district abd temp to output
        output[district] = currTemp
    }
})
console.log(output);



