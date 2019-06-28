var tHigh = parseInt(document.getElementById("value2").value);
var sSpeed = parseInt(document.getElementById("value5").value);
var fWindchill = 35.74 + (0.6215*tHigh)-(35.75*Math.pow(sSpeed, 0.16))+(0.4275*tHigh*Math.pow(sSpeed,0.16));
document.getElementById("value3").innerHTML = fWindchill.toFixed(0);


