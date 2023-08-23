
//se puede encadenar las funciones si mandamos llamar funciones dentro de otras

function iniciarApp() {
    console.log('Iniciando app...');

    segundaFuncion();
};

iniciarApp();

function segundaFuncion() {
    console.log('desde la segunda funcion')

    usuarioAutenticado('pablo')
}


function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...')
    console.log(`usuario autenticado exitosamente ${usuario}`)
}