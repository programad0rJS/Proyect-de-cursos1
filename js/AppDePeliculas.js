const Peliculas = [{
    Nombre: 'Lucifer',
    Img: 'https://image.tmdb.org/t/p/w300/vkGnVBSNpayJ1oCfyVaMvhrim95.jpg',
    Botton: '../Paginas/Articles.html'
},


{
    Nombre: 'Venom 2: Habrá Matanza',
    Img: 'https://img.repelis.id/cover/venom-let-there-be-carnage-2-1633400762.jpg',
    Botton: '../Paginas/Informaciones.html'

},
{
    Nombre: 'Venom',
    Img: 'https://img.repelis.id/cover/venom.jpg',
    Botton: '../Paginas/Info.html',
},

];



const Formulario = document.querySelector('#Formulario');




const Resultado = document.querySelector('#Resultado');



const Filtrar = () => {


    Resultado.innerHTML = '';

    const Texto = Formulario.value.toLowerCase();
    for (let Pelicula of Peliculas) {
        let Nombre = Pelicula.Nombre.toLowerCase();

        if (Nombre.indexOf(Texto) !== -1) {
            Resultado.innerHTML += `                                   
           <div class='Concurso'>
                <p class="Parrafos">                 
                <img class='Imageness' src=${Pelicula.Img} alt="Peliculas">  
                <br>
                <br> 
                   
                    ${Pelicula.Nombre} 
                <br>
                <br>   
                
                <a href=${Pelicula.Botton}>                 
                    <button class="Boton">Ver Informacion </button> 
                    <br>
                    <br>  
                    <br>
                     
                </a>



                </p>
           </div>
        `
        };
    };
    if (Resultado.innerHTML === '') {
        Resultado.innerHTML += `
        <h3 class="Series">Pelicula No Encontrado</h3>
        `
    };
};
Formulario.addEventListener('click', Filtrar);
Formulario.addEventListener('keyup', Filtrar);
Filtrar();

