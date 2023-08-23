/*Ejemplos de break y continue*/


//brake hacee que el codigo se rompa asi no termine de ejecutar la condicional

for (let i = 0; i<= 10; i++){
    if (i === 5){
        console.log(`El numero ${i} es 5`)
        break;
    }
    console.log(`numero:${i}`)
}

// >> 1,2,3,4,este es el numero5

//continue hace que el codigo se siga ejecutando apesar de que ya se cumplio la condicional

for (let i = 0; i<= 10; i++){
    if (i === 5){
        console.log(`El numero ${i} es 5`)
        continue;
    }
    console.log(`numero:${i}`)
}

// >> 1,2,3,4,este es el numero 5, 6,7,8,9,10