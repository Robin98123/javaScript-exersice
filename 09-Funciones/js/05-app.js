function sumar(a, b){ //a y b son parametros
    console.log(a + b)
};

sumar(2, 5) //2 y 5 son argumentos y se le asignarán a los parametros en a y b

sumar(500, 250) //si yo deseo asignar otro valor al ser una función dinamica basta con pasar otros argumentos


function saludar (nombre, apellido){
    alert(`hola ${nombre} ${apellido} bienvenido`)
};

saludar('Robinson', 'Rincon');