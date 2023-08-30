const btnflotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//evento del click al boton

//se puede contener en una funcion anonima
// btnflotante.addEventListener('click', () =>{
//     console.log('Diste click en el boton')
// });

// o se puede crear la funcion por aparte

function mostrarOcultarFooter(){
    if( footer.classList.contains('activo')){ //el if verificará que cuando tenga la clase activo
        footer.classList.remove('activo'); //se pueda remover la clase y vueleva a ocultarse 
        this.classList.remove('activo')// remueve la clase de activo al boton flotante
        this.textContent = 'idioma y moneda'
    } else{
    footer.classList.add('activo'); //por defecto el le agregrá la clase activo que muestra el footer
    this.classList.add('activo'); //agrega la clase al boton
    this.textContent ='x cerrar'
    }
}

btnflotante.addEventListener('click', mostrarOcultarFooter);