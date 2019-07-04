let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=833948fa196c1bccd74cedfe6acf348c";
weatherRequest.open("Get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function()
    {
        let weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        document.getElementById("condition").innerHTML=weatherData.weather[0].description;
        parseInt(document.getElementById("high").innerHTML=weatherData.main.temp_max);
        parseInt(document.getElementById("humidity").innerHTML=weatherData.main.humidity);
        parseInt(document.getElementById("speed").innerHTML=weatherData.wind.speed);
    }