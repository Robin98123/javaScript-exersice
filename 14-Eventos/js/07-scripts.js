//evitar el event Buibbling con delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('titulo')){
        console.log('Diste clcik en titulo')
    }
    else if(e.target.classList.contains('precio')){
        console.log('Diste clcik en precio')
    }
    else if(e.target.classList.contains('card')){
        console.log('Diste clcik en card')
    }
});