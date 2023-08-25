//modificar textos o imagenes con js

const encabezado = document.querySelector('.contenido-hero h1').textContent;//si se pone la proiedad la toma
console.log(encabezado);

//ingresar texto dentro del html
//existen 3 maneras de hacerlo

//con inner text (este detecta cuando un texto esta oculto en css);
/*console.log(encabezado.innertex);

//con text content este si detecta cuando un texto está oculto
/*console.log(encabezado.textContent);

//con innerHTML este traerá todo el codigo html y otras etiquetas de tenerlas
/*console.log(encabezado.innerHTML);*/

document.querySelector('.contenido-hero h1').textContent = 'hola pedro'

//cambiar imagen

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'