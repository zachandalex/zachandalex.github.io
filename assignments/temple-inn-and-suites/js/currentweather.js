var myTemple = document.getElementById("medford").innerHTML;
/*var parameters = '';

if (myTemple == 'medford') {
    parameters = "zip=97502,us";
}
else if (myTemple == 'portland') {
    parameters = "zip=97035,us";
}
else if (myTemple == 'seattle') {
    parameters = "zip=98007,us";
}
else if (myTemple == 'spokane') {
    parameters = "zip=99206,us";
}*/

    let weatherRequest = new XMLHttpRequest();
    let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?zip=97502,us&units=imperial&APPID=833948fa196c1bccd74cedfe6acf348c";
    weatherRequest.open("Get", apiURLstring, true);
    weatherRequest.send();

    weatherRequest.onload = function () {
        let weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        document.getElementById("condition").innerHTML = weatherData.weather[0].description;
        var tHigh = parseInt(document.getElementById("high").innerHTML = weatherData.main.temp_max);
        parseInt(document.getElementById("humidity").innerHTML = weatherData.main.humidity);
        var sSpeed = parseInt(document.getElementById("speed").innerHTML = weatherData.wind.speed);
        var fWindchill = 35.74 + (0.6215 * tHigh) - (35.75 * Math.pow(sSpeed, 0.16)) + (0.4275 * tHigh * Math.pow(sSpeed, 0.16));
        document.getElementById("windchill").innerHTML = fWindchill.toFixed(0);
        document.getElementById("currenttemp").innerHTML = weatherData.main.temp;
    }

