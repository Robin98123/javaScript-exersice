// switch case

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('aun no has seleccionado un método de pafo o no esta soportado');
        break;
}