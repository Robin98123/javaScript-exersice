const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //esta propiedad permite que el navegador no haga por defecto lo que tenga establecido

    console.log(e);
})