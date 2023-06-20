//document.getElementById("c").innerText = 5;

let count = 0;
console.log(count);

/*var myAge = 22;
console.log(myAge);

let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);*/

let bonusPoints = 50;

bonusPoints += 100;

bonusPoints -= 25;

bonusPoints += 75;

document.getElementById("saveEl").innerText = "Previous entries:";

function increment() {
    let cnt = document.getElementById("c").innerText;
    let count = parseInt(cnt);
    document.getElementById("c").innerText = count + 1;
}

function decrement() {
    let cnt = document.getElementById("c").innerText;
    let count = parseInt(cnt);
    document.getElementById("c").innerText = count - 1;
}

function reset() {
    document.getElementById("c").innerText = 0;
}

function save() {
    console.log(document.getElementById("c").innerText);
    let cnt = document.getElementById("c").innerText;
    let count = parseInt(cnt);
    document.getElementById("saveEl").innerText += " " + count + " -";
    document.getElementById("c").innerText = 0;
}

/*
let message = "You have three new notifications";
console.log(message);

let username = "Danie";
let messageToUser = message + "," + username + "!";*/

/*let name = "Jaswanth Sai";
let greeting = "Hey, Your name is ";
let myGreeting = greeting + name;
console.log(myGreeting);

let p = 4;
let bp = "10";
let tp = p + bp;
console.log(tp);*/