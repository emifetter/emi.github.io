window.addEventListener('load',function(){
    console.log("El contenido cargado");

    var imagenes = [];

    imagenes[0] ='fondo2.jpg';
    imagenes[1] ='full1nikerun.jpg';

    var indiceImagenes=0;
    var tiempo =2500;
    

    function cambiarImagenes(){
        this.document.slider.src=imagenes[indiceImagenes];
        

        if (indiceImagenes < 1) {
            indiceImagenes++;
            
        }else{
            indiceImagenes=0;
        }

    }

    this.setInterval(cambiarImagenes,tiempo);


});