/*Calling and creating data with JSON*/
var header = document.querySelector ('header.motto');
var section = document.querySelector ('section.motto');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest ();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
/*This is waiting for the response to return from the server and then dealing with it*/
request.onload = function()
  {
    var motto = request.response;
    /*populateHeader(motto);*/
    showMotto (motto);
  /*an example of this same string using raw json text and parsing it to convert to an actual 
    javascript object
        
    request.open('GET', requestURL);
    request.responseType = 'text' //now we're getting a string
    request.send();

    request.onload = function() 
    {
        var supreHeroesText = request.response; //get the string from the response
        var superHeroes = JSON.parse(superHeroesText); //convert it to an object
        populateHeader(superHeroes);
        showHeroes(superHeroes); 
    } */
  }
function showMotto(jsonObj)
  {
    var towns = jsonObj['towns'];
    for (var i=0; i < towns.length; i++)
      {
        var myArticle = document.createElement('article');
        /*town name*/
        var myH2 = document.createElement('h2');
        /*motto*/
        var myH3 = document.createElement('h3');
        /*Statistics*/
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        /*events*/
        var myList = document.createElement('ul');
        
        myH2.textContent = towns[i].name;
        myH3.textContent = towns[i].motto;
        myPara1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        myPara2.textContent = 'Population: ' + towns[i].currentPopulation;
        myPara3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        myPara4.textContent = 'Events: ';

        var events = towns[i].events;
        for (var j="0"; j < towns.length; j++)
          {
            var listItem = document.createElement('li');
            listItem.textContent = events[j];
            myList.appendChild(listItem);
          }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
      }
  }