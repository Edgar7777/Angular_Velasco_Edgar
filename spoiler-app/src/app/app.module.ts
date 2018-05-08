import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  nombre:'Edgar';
  apellido:'Velasco';
  edad:'28';
  sueldo:1;
  fechaNacimiento = new Date('1989-06-10');
  nombreBoton = 'Cambiar color';
  nombreClase = 'sa-titulo';

  cambiarClaseDeTitulo(){
    const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
    if(nombreClaseEsTitulo){
      this.nombreClase='sa-subtitulo';
    }else{
      this.nombreClase='sa-titulo';
    }
  }
}
