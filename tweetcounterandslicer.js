var charlen = prompt("write your tweet");
var lengthofchar = charlen.length;
var totalcharleft = 240 - lengthofchar;
alert("Your tweet length is " + lengthofchar + " characters and the number of characters left is " + totalcharleft);
var newtweet = charlen.slice(0,240);
alert(newtweet);
