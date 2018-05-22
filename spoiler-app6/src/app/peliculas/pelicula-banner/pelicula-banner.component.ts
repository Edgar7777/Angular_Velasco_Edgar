import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {

  public title = 'Spoiler CTM';
  public descripcionPelicula = 'Imagen de la pelicula Overlord';
  nombrePelicula = 'OverLord';
  public urlImagen = 'http://vignette4.wikia.nocookie.net/overlordmaruyama/images/c/cd/Albedo.png';
  public urlImagen1 = 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/5/57/Shalltear_Bloodfallen.jpeg/revision/latest?cb=20150720194730';
  public urlImagen2 = 'https://www.animeclick.it/immagini/anime/Overlord/cover/Overlord-cover.jpg';
  esEstreno = false;
  textoEstreno: string;
  claseEstreno: string;

  constructor() { }

  ngOnInit() {
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }

  }



}
