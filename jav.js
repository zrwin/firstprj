var n = Math.random(); // random dice number1

n = n * 6;

n = Math.floor(n) + 1;


var m = Math.random(); //random dice number2

m *= 6;

m = Math.floor(m) + 1;


var randomDiceSource = "dice" + n + ".png";

var randomimage1 = "images/" + randomDiceSource;

document.querySelectorAll("img")[0].setAttribute("src", randomimage1);

var randomDiceSource2 = "dice" + m + ".png";

var randomimage2 = "images/" + randomDiceSource2;

document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

if (n > m) {
    document.querySelector("h2").textContent = "🏳️Player 1 Wins";
} else if (m > n) {
    document.querySelector("h2").textContent = "🏳️Player 2 Wins";
} else {
    document.querySelector("h2").textContent = "😇Draw";
}