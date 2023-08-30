const navegacion = document.querySelector('.navegacion');

// resgistrar un enevto

navegacion.addEventListener('click', () => {
    console.log('click en nav'); //hace clcik
})

navegacion.addEventListener('mouseenter', () => {
    console.log('estas sobre el nav'); //se mantiene el cursor
})

navegacion.addEventListener('mouseout', () => {
    console.log('estas fuera del nav'); //el cursor esta fuera del elemento 
})

navegacion.addEventListener('mousedown', () => {
    console.log('hciciste click con mousedown'); //hace clcik (parecido a clcik)
})

navegacion.addEventListener('mouseup', () => {
    console.log('soltataste el click'); // Cuando se suelta el click
})

navegacion.addEventListener('dblclick', () => {
    console.log('hiciste doble click'); // hace doble click
})