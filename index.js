var randomNumber = Math.floor((Math.random()*6)+1);
var randomNumberImage = "dice"+randomNumber+".png";
console.log("images/"+randomNumberImage);
document.querySelectorAll("img")[0].setAttribute("src","images/"+ randomNumberImage);

var randomNumber2 = Math.floor((Math.random()*6)+1);
console.log("images/"+randomNumberImage2);
var randomNumberImage2 = "dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src","images/"+ randomNumberImage2);

if(randomNumber<randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player2 wins 🏁 ";

}else
{
  document.querySelector("h1").innerHTML = "🏁 Player1 wins ";
}
