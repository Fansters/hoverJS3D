'use strict';

const circle = document.querySelector('.circle');
const body = document.querySelector('body');
const griki = document.querySelector('#griki');

//animation
body.addEventListener('mousemove', (e) => {
     let xAxis = (window.innerWidth / 2 - e.pageX) / 65;
     let yAxis = (window.innerHeight / 2 - e.pageY) / 75;
     griki.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateX(${xAxis * -.7}px) translateY(${yAxis * -1}px)`;
     circle.style.transform = `translateX(${xAxis *.3}px) translateY(${yAxis *.3}px) rotateZ(${xAxis*6}deg)`;
     // console.log(e.pageX);
})

//  different products



