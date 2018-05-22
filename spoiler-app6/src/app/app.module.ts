import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { GrillaBannerComponent } from './grilla/grilla-banner/grilla-banner.component';
import { MenuBannerComponent } from './menu/menu-banner/menu-banner.component';
import { BuscadorBannerComponent } from './buscador/buscador-banner/buscador-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    GrillaBannerComponent,
    MenuBannerComponent,
    BuscadorBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //clase ='';
}
