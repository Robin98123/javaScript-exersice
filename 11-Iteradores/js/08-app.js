const pendientes = ['Tarea', 'comer', 'proyecto', 'Estudiar Javascript'];

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

// for(let tarea in pendientes){
//     console.log(tarea)
// }


for( let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
   
}
