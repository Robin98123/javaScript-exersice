const dinero = 1000;
const totalAPagar = 300;
const tarjeta = true;


if(dinero >= totalAPagar){
    console.log('puedes proceder al pago')
} else if(tarjeta){
    console.log('Si puedo pagar por que tengo la tarjeta')
}else {
    console.log('fondos insuficientes') 
}