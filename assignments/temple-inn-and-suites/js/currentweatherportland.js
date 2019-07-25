var myTemple = document.getElementById("portland").innerHTML;
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

    let weatherRequestportland = new XMLHttpRequest();
    let apiURLstringportland = "https://api.openweathermap.org/data/2.5/weather?zip=97035,us&units=imperial&APPID=833948fa196c1bccd74cedfe6acf348c";
    weatherRequestportland.open("Get", apiURLstringportland, true);
    weatherRequestportland.send();

    weatherRequestportland.onload = function () {
        let weatherDataportland = JSON.parse(weatherRequestportland.responseText);
        console.log(weatherDataportland);
        document.getElementById("condition").innerHTML = weatherDataportland.weather[0].description;
        var tHigh = parseInt(document.getElementById("high").innerHTML = weatherDataportland.main.temp_max);
        parseInt(document.getElementById("humidity").innerHTML = weatherDataportland.main.humidity);
        var sSpeed = parseInt(document.getElementById("speed").innerHTML = weatherDataportland.wind.speed);
        var fWindchill = 35.74 + (0.6215 * tHigh) - (35.75 * Math.pow(sSpeed, 0.16)) + (0.4275 * tHigh * Math.pow(sSpeed, 0.16));
        document.getElementById("windchill").innerHTML = fWindchill.toFixed(0);
        document.getElementById("currenttemp").innerHTML = weatherDataportland.main.temp;
    }

