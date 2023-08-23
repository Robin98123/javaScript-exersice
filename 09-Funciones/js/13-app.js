const reproductor = {
    reproducir :  id =>  console.log(`reproduciendo canción con el id numero ${id}`),
    
    pausar: () =>  console.log('pausando...'),

    borrar: id => console.log(`borrando canción... ${id}`),

    agregarPlaylist:  id => console.log(`agregando a la playlist canción con id ${id}`),

    reproducirPlaylist :  agregarPlaylist => console.log(`se ha agregado la playlist ${agregarPlaylist}`),
}

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrar(30);

reproductor.agregarPlaylist(20);
reproductor.agregarPlaylist(50);
reproductor.agregarPlaylist(60);

reproductor.reproducirPlaylist(1);
reproductor.reproducirPlaylist(2);
reproductor.reproducirPlaylist(3);
