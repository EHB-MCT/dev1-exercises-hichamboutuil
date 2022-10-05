"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


drawName();

function drawName() {
context.beginPath();
context.moveTo(200,50);
context.lineTo(200,250);
context.stroke();

context.beginPath();
context.moveTo(300,50);
context.lineTo(300,250);
context.stroke();

context.beginPath();
context.moveTo(200,150)
context.lineTo(300,150)
context.stroke();

context.beginPath();
context.moveTo(400,50)
context.lineTo(400,250)
context.stroke();

context.beginPath();
context.moveTo(600,50)
context.lineTo(500,150)
context.stroke();

context.moveTo(500,150)
context.lineTo(600,250)
context.stroke();

context.beginPath();
context.moveTo(700,50);
context.lineTo(700,250);
context.stroke();

context.beginPath();
context.moveTo(800,50);
context.lineTo(800,250);
context.stroke();

context.beginPath();
context.moveTo(700,150)
context.lineTo(800,150)
context.stroke();

context.beginPath();
context.moveTo(1000,50)
context.lineTo(900,250)
context.stroke();

context.beginPath();
context.moveTo(1000,50)
context.lineTo(1100,250)
context.stroke();

context.beginPath();
context.moveTo(950,150)
context.lineTo(1050,150)
context.stroke();


}
