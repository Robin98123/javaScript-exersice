// El reto del fizz buzz

//todos los que son multiplos de 3 se deben imprimir en consola con la palabra fizz
//Todos los que son multiplos de 5 se deben imprimir en consola con la palabra buzz
//Todos los que son multipls de 3 y 5 se deben imprimir en consola con la palabra fizzbuzz

for(let i = 1 ; i < 100 ; i++){
    if(i % 15 === 0){
        console.log(`${i} fizz buzz!!!`);
    }else if( i % 3 === 0){
        console.log(`${i} Fizz`)
    }else if(i % 5 === 0){
        console.log(`${i} buzz`)
    }  
}