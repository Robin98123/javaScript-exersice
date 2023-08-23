 const usuario = true;
 const puedePagar = true;

 if(usuario && puedePagar){
    console.log('puedes proceder al pago')
 } else if(!usuario && !puedePagar) {
    console.log('no, no puedes comprar')
 };