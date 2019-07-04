var tHigh = parseInt(document.getElementById("high").innerHTML);
var sSpeed = parseInt(document.getElementById("speed").innerHTML);
var fWindchill = 35.74 + (0.6215*tHigh)-(35.75*Math.pow(sSpeed, 0.16))+(0.4275*tHigh*Math.pow(sSpeed,0.16));
document.getElementById("windchill").innerHTML = fWindchill.toFixed(0);


