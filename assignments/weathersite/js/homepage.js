var header = document.querySelector('header.townstats');
var section = document.querySelector('section.townstats');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townstats = request.response;
    showTownstats(townstats);
}
function showTownstats(jsonObj) {
    var towns = jsonObj['towns'];
    var townNames = ["Fish Haven", "Soda Springs", "Preston"]
    for (var i = 0; i < towns.length; i++) {
        for (var x = 0; x < townNames.length; x++) {
            if (towns[i].name == townNames[x]) {
                var myImg = document.createElement('img');
                if (towns[i].name == 'Preston') {
                    myImg.setAttribute('src', 'images/preston-750.jpg');
                    myImg.setAttribute('alt', 'Preston, Idaho');
                }
                else if (towns[i].name == "Soda Springs") {
                    myImg.setAttribute('src', 'images/soda-springs-750.jpg');
                    myImg.setAttribute('alt', 'Soda Springs, Idaho');
                }
                else if (towns[i].name == "Fish Haven") {
                    myImg.setAttribute('src', 'images/fish-haven-750.jpg');
                    myImg.setAttribute('alt', 'Fish Haven, Idaho');
                }
                else {
                    myImg.setAttribute('src', 'images/clouds-750.jpg');
                    myImg.setAttribute('alt', 'Idaho');
                }
                var myArticle = document.createElement('article');
                var myH2 = document.createElement('h2');
                var myH3 = document.createElement('h3');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
                var myPara4 = document.createElement('p');

                myH2.textContent = towns[i].name;
                myH3.textContent = towns[i].motto;
                myPara1.textContent = 'Year Founded: ' + towns[i].yearFounded;
                myPara2.textContent = 'Population: ' + towns[i].currentPopulation;
                myPara3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

                myArticle.appendChild(myImg);
                myArticle.appendChild(myH2);
                myArticle.appendChild(myH3);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myPara4);
                section.appendChild(myArticle);
            }
        }
    }
}
