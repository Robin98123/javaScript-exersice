// seleccionar por query selector por clase

const card = document.querySelector('.card')
console.log(card);

//seleccionar por selectores especificos como css

const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo card de una sección >>hospedaje

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//seleccionar con id

const formulario = document.querySelector('#formulario');
console.log(formulario);

//selecion por elemento html

const navegacion = document.querySelector('nav');
console.log(navegacion)