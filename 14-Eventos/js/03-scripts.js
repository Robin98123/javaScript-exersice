//Eventos en el teclado

const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo...')
// })

//Registrar ele evento

/*se registra el evento en el que si el input esta vacio presente un valor vacio*/

busqueda.addEventListener('input',(e) => {
    if(e.target.value === ''){
        console.log('falló la validación')
    }
})