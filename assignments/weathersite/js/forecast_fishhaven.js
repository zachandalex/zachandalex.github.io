let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = "https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&units=imperial&APPID=833948fa196c1bccd74cedfe6acf348c";
forecastRequest.open("Get", apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function () {
    let weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);
    var jlist = weatherData.list;
    var wicon = [];
    var wtemp = [];
    var wdesc = [];
    var day = [];

    for (i = 0; i < jlist.length; i++) {
        if (jlist[i].dt_txt.includes("18:00:00")) {
            wicon.push(weatherData.list[i].weather[0].icon);
            wtemp.push(weatherData.list[i].main.temp);
            wdesc.push(weatherData.list[i].weather[0].description);
            day.push(weatherData.list[i].dt_txt);
        }
    }

    var now = new Date();
    var dayOfWeek = now.getDay();

    let day01 = day[0];
    let img01 = wicon[0];
    let temp01 = wtemp[0];
    let desc01 = wdesc[0];

    let day02 = day[1];
    let img02 = wicon[1];
    let temp02 = wtemp[1];
    let desc02 = wdesc[1];

    let day03 = day[2];
    let img03 = wicon[2];
    let temp03 = wtemp[2];
    let desc03 = wdesc[2];

    let day04 = day[3];
    let img04 = wicon[3];
    let temp04 = wtemp[3];
    let desc04 = wdesc[3];

    let day05 = day[4];
    let img05 = wicon[4];
    let temp05 = wtemp[4];
    let desc05 = wdesc[4];

    document.getElementById("day1").innerHTML = day01;
    document.getElementById("image1").setAttribute("src", "http://openweathermap.org/img/w/"+img01+".png");
    document.getElementById("image1").setAttribute("alt", desc01);
    document.getElementById("temp1").innerHTML = temp01.toFixed(0) + "&deg;F";
    document.getElementById("day2").innerHTML = day02;
    document.getElementById("image2").setAttribute("src", "http://openweathermap.org/img/w/" + img02 + ".png");
    document.getElementById("image2").setAttribute("alt", desc02);
    document.getElementById("temp2").innerHTML = temp02.toFixed(0) + "&deg;F";
    document.getElementById("day3").innerHTML = day03;
    document.getElementById("image3").setAttribute("src", "http://openweathermap.org/img/w/" + img03 + ".png");
    document.getElementById("image3").setAttribute("alt", desc03);
    document.getElementById("temp3").innerHTML = temp03.toFixed(0) + "&deg;F";
    document.getElementById("day4").innerHTML = day04;
    document.getElementById("image4").setAttribute("src", "http://openweathermap.org/img/w/" + img04 + ".png");
    document.getElementById("image4").setAttribute("alt", desc04);
    document.getElementById("temp4").innerHTML = temp04.toFixed(0) + "&deg;F";
    document.getElementById("day5").innerHTML = day05;
    document.getElementById("image5").setAttribute("src", "http://openweathermap.org/img/w/" + img05 + ".png");
    document.getElementById("image5").setAttribute("alt", desc05);
    document.getElementById("temp5").innerHTML = temp05.toFixed(0) + "&deg;F";
}