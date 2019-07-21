var header = document.querySelector('header.closures');
var section = document.querySelector('section.closures');
var requestURL = 'https://zachandalex.github.io/assignments/temple-inn-and-suites/json/templeclosure.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var closures = request.response;
    showClosures(closures);
}
function showClosures(jsonObj) {
    var temples = jsonObj['temples'];
    var templeNames = ["Portland Oregon Temple", "Medford Oregon Temple", "Seattle Washington Temple", "Spokane Washington Temple"];
    for (var i=0; i < temples.length; i++) {
        for (var x = 0; x < templeNames.length; x++) {
            if (temples[i].name==templeNames[x]) {
                var myArticle = document.createElement('article');
                var myList = document.createElement('ul');
                var closures = temples[i].closures;
                for (var j = 0; j < closures.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = closures[j];
                    myList.appendChild(listItem);
                }
                myArticle.appendChild(myList);

                section.appendChild(myArticle);

            }
        }
    }
}
