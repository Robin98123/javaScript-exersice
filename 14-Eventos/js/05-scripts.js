window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;

    // console.log(scrollPX); //medir el scroll en la pagina

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 784){
        console.log('El elemento ya esta visisble');
    } else {
        console.log('Aun no, da mas scroll')
    }

    //esta funcion permite ver si el elemento esdta visible o aun no 
})