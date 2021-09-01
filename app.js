'use strict';

const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const griki = document.querySelector('#griki');
const pacinas = document.querySelector('.pacinas');
const kastites = document.querySelector('.kastites');
const viensKg = document.querySelector('.viensKg');
const viensKgZip = document.querySelector('.viensKgZip');
const imgGriki = document.querySelector('img');

//animation
container.addEventListener('mousemove', (e) => {
     let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
     let yAxis = (window.innerHeight / 2 - e.pageY) / 75;
     // griki.style.transform = `rotateY(${xAxis * .65}deg) rotateX(${yAxis * .9}deg) translateX(${xAxis * -.5}px) translateY(${yAxis * -.7}px)`;
     circle.style.transform = `translateX(${xAxis * .3}px) translateY(${yAxis * .3}px) rotateZ(${xAxis * 15}deg)`;
});

// shortcut fnk
const imgTimeout = function () {
     setTimeout(function () { imgGriki.style.opacity = `1`; }, 350);
     setTimeout(function () { imgGriki.style.transform = `translateX(-200px)` }, 200);
     setTimeout(function () { imgGriki.style.transform = `translateX(0px)` }, 350);
}
const imgStyle = function () {
     imgGriki.style.transform = `translateX(200px)`;
     imgGriki.style.opacity = `0`;
}

//  different products
pacinas.addEventListener('click', function () {
     imgStyle();
     setTimeout(function () { griki.src = `griki_05kgTP.png`; }, 100,);
     imgTimeout();
})
kastites.addEventListener('click', function () {
     imgStyle();
     setTimeout(function () { griki.src = `griki4x125TP.png`; }, 100);
     imgTimeout();
})
viensKg.addEventListener('click', function () {
     imgStyle();
     setTimeout(function () { griki.src = `griki1kgTP.png`; }, 100);
     imgTimeout();
})
viensKgZip.addEventListener('click', function () {
     imgStyle();
     setTimeout(function () { griki.src = `griki_zipTP.png`; }, 100);
     imgTimeout();
})
