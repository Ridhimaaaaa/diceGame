/*function dice(){
    var randomnumber1= Math.floor(Math.random()*6)+1;
 var x= document.querySelector('.img1').setAttribute("src","dice"+ randomnumber1+".png");

 var randomnumber2= Math.floor(Math.random()*6)+1;
 var y= document.querySelector(".img2").setAttribute("src","dice"+ randomnumber2+".png");

 if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 WINS!"
 }
 else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 WINS!"
 }
 else if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="IT'S A DRAW!"
 }
}
dice();
var arrayOfImages = ['images/dice1.png',
'images/dice2.png',
'images/dice3.png',
'images/dice4.png',
'images/dice5.png',
'images/dice6.png'];
 
 
function dicee (){
  var rand1 = Math.floor(Math.random() * arrayOfImages.length)+1;
 var x = document.querySelector('.img1').src= arrayOfImages[rand1];
 
  var rand2 = Math.floor(Math.random() * arrayOfImages.length)+1;
  var y = document.querySelector('.img2').src = arrayOfImages[rand2];
 
  if (x > y) {
    document.querySelector('h1').innerHTML="Player 1 Wins";
  } else if (x<y) {
    document.querySelector("h1").innerHTML="Player 2 Wins";
  } else if (x===y) {
    document.querySelector('h1').innerText="draw";
  }
};
 
dicee();*/


var randomnumber1=Math.floor(Math.random()*6)+1;
var raandomImageSource1= "images/dice"+ randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",raandomImageSource1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var raandomImageSource2= "images/dice"+ randomnumber2+ ".png";
document.querySelectorAll('img')[1].setAttribute("src", raandomImageSource2);

function dice(){
    if(randomnumber1>randomnumber2){
        document.querySelector("h1").innerHTML="🚩Player 1 WINS!";
    }
    else if(randomnumber1<randomnumber2){
        document.querySelector("h1").innerHTML="Player 2 WINS!🚩";
    }
    else if(randomnumber1==randomnumber2){
        document.querySelector("h1").innerHTML="IT'S A DRAW :)";
    }
}
dice();