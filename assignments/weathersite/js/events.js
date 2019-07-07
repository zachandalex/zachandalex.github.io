var header = document.querySelector('header.events');
var section = document.querySelector('section.events');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var events = request.response;
    showEvents(events);
}
function showEvents(jsonObj) {
    var towns = jsonObj['towns'];
    var townNames = [document.getElementById("town").innerHTML];
    for (var i = 0; i < towns.length; i++) {
        for (var x = 0; x < townNames.length; x++) {
            if (towns[i].name == townNames[x]) {
                var myArticle = document.createElement('article');
                var myH3 = document.createElement('h3');
                var myPara1 = document.createElement('p');
                var myList = document.createElement('ul');
                myH3.textContent = 'Events: ';
                var events = towns[i].events;
                for (var j = "0"; j < towns.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = events[j];
                    myList.appendChild(listItem);
                }
                myArticle.appendChild(myH3);
                myArticle.appendChild(myList);

                section.appendChild(myArticle);
            }
        }
    }
}