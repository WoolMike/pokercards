/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pintas = document.querySelectorAll(".las-pintas");
  let numero = document.querySelector("#numero");
  let pintasRandoms = () => {
    let lasPintas = ["♥", "♦", "♠", "♣"];
    let pintaRandom = Math.floor(Math.random() * lasPintas.length);
    let random = lasPintas[pintaRandom];

    if (random == "♦" || random == "♥") {
      pintas[1].style.color = "red";
      pintas[0].style.color = "red";
    } else {
      pintas[1].style.color = "black";
      pintas[0].style.color = "black";
    }
    pintas[1].innerText = random;
    pintas[0].innerText = random;

    let numArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "A", "K", "Q"];
    let numRandom = Math.floor(Math.random() * numArr.length);
    let theNums = numArr[numRandom];
    numero.innerText = theNums;
    return random;
  };
  pintasRandoms();
  setInterval(pintasRandoms, 10000);

  let btn = document.querySelector("#button");
  btn.addEventListener("click", () => {
    pintasRandoms();
  });

  //
  let card = document.querySelector("#card");
  let ancho = document.querySelector("#ancho");
  ancho.addEventListener("change", event => {
    console.log(event);
    ancho.innerHTML = card;
    card.style.width = `${event.target.value}px`;
  });
  let alto = document.querySelector("#alto");
  alto.addEventListener("change", event => {
    console.log(event);
    alto.innerHTML = card;
    card.style.height = `${event.target.value}px`;
  });
};
