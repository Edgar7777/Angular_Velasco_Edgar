import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit{

  esEstreno = false;

  public title = 'Spoiler CTM';

  arregloPeliculasProximamente = [
    {
      descripcionPelicula: 'Imagen de la pelicula Overlord',
      nombrePelicula: 'OverLord',
      esEstreno: false,
      urlImagen: 'http://vignette4.wikia.nocookie.net/overlordmaruyama/images/c/cd/Albedo.png'

    },
    {
      descripcionPelicula: 'Imagen Pelicula No Game No Life 0',
      nombrePelicula: 'No Game No Life 0',
      esEstreno: false,
      urlImagen: 'http://kancha.pe/wp-content/uploads/2018/03/nogamenolife-770x514.jpg'
    },

  ]

  arregloPeliculasEstreno = [

    {
      nombrePelicula: 'Sword Art Online Ordinal Scale',
      esEstreno: true,
      urlImagen: 'https://media.redadn.es/imagenes/animanga-0_317805.jpg'

    },
    {
      nombrePelicula: 'mazinger Z Infinity',
      esEstreno: true,
      urlImagen: 'https://static.cinepolis.com/img/peliculas/26793/1/1/26793.jpg'

    },
    {
      nombrePelicula: 'Dragon Ball Super Saiyanjin Origins',
      esEstreno: true,
      urlImagen: 'https://media.metrolatam.com/2018/05/17/daoi7oauqaaxotf-d3f1d5cc0d9cf40ee3e4ec2b2e719f48.jpglarge'

    },
    {
      nombrePelicula: 'Detective Conan 2018',
      esEstreno: true,
      urlImagen: 'https://ia.media-imdb.com/images/M/MV5BNjMzMDA3MDYtNTNlMS00YTc3LTlkYmItYjViMjZjY2U1YzNmXkEyXkFqcGdeQXVyMjY2OTU0MTg@._V1_.jpg'

    },

  ]

  arregloPeliculasAgregadasUltimamenteIzquierda = [

    {
      nombrePelicula: 'Sword Art Online Ordinal Scale',
      esEstreno: true,
      urlImagen: 'https://media.redadn.es/imagenes/animanga-0_317805.jpg'

    },
    {
      nombrePelicula: 'mazinger Z Infinity',
      esEstreno: true,
      urlImagen: 'https://static.cinepolis.com/img/peliculas/26793/1/1/26793.jpg'

    },
    {
      nombrePelicula: 'Dragon Ball Super Saiyanjin Origins',
      esEstreno: true,
      urlImagen: 'https://media.metrolatam.com/2018/05/17/daoi7oauqaaxotf-d3f1d5cc0d9cf40ee3e4ec2b2e719f48.jpglarge'

    },
    {
      nombrePelicula: 'Detective Conan 2018',
      esEstreno: true,
      urlImagen: 'https://ia.media-imdb.com/images/M/MV5BNjMzMDA3MDYtNTNlMS00YTc3LTlkYmItYjViMjZjY2U1YzNmXkEyXkFqcGdeQXVyMjY2OTU0MTg@._V1_.jpg'

    },

  ]

  arregloPeliculasAgregadasUltimamenteDerecha = [

    {
      nombrePelicula: 'Sword Art Online Ordinal Scale',
      esEstreno: true,
      urlImagen: 'https://media.redadn.es/imagenes/animanga-0_317805.jpg'

    },
    {
      nombrePelicula: 'mazinger Z Infinity',
      esEstreno: true,
      urlImagen: 'https://static.cinepolis.com/img/peliculas/26793/1/1/26793.jpg'

    },
    {
      nombrePelicula: 'Dragon Ball Super Saiyanjin Origins',
      esEstreno: true,
      urlImagen: 'https://media.metrolatam.com/2018/05/17/daoi7oauqaaxotf-d3f1d5cc0d9cf40ee3e4ec2b2e719f48.jpglarge'

    },
    {
      nombrePelicula: 'Detective Conan 2018',
      esEstreno: true,
      urlImagen: 'https://ia.media-imdb.com/images/M/MV5BNjMzMDA3MDYtNTNlMS00YTc3LTlkYmItYjViMjZjY2U1YzNmXkEyXkFqcGdeQXVyMjY2OTU0MTg@._V1_.jpg'

    },

  ] 
  textoEstreno: string;
  claseEstreno: string;

  constructor() { }

  ngOnInit() {
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else{
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }
}
