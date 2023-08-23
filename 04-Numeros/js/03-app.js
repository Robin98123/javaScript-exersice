let resultado;

// ver resultado de pi

resultado = Math.PI;


// redondear un numero con el metodo .round

resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.5);

//redondear siempre hacia arriba con el metodo .ceil

resultado = Math.ceil(2.1);

//redondear siempre hacia abajo .floor

resultado = Math.floor(2.9);

//Raiz cuadrada 

resultado= Math.sqrt(144);

//Absoluto
resultado = Math.abs(-500);

//potencia
resultado = Math.pow (8, 3);

//Minimo de una serie
resultado = Math.min (3, 5, 1, 12, -3);

//Máximo de una serie
resultado = Math.max (3, 5, 1, 12, -3);

//Aleatorio
resultado = Math.random () *20 ;

//combinar aleatorio con floor para generar numeros enterios

resultado = Math.floor (Math.random() * 30);


console.log(resultado);