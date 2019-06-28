let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=833948fa196c1bccd74cedfe6acf348c";
weatherRequest.open("Get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() 
{
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
//Calling the weatherData JSON to get the temp and feeding it back to my HTML id. 
//It is under main then temp. found this using the inspect function in the browser.
    document.getElementById("current-temp").innerHTML=weatherData.main.temp;
    let icon = "http://openweathermap.org/img/wn/"+ weatherData.weather[0].icon +".png"
    let desc = weatherData.weather[0].description;

    document.getElementById("current-img").setAttribute("src", icon);
    document.getElementById("current-img").setAttribute("alt", desc);
}
