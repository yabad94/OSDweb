import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.rutas';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './compartido/navbar/navbar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NoticiasComponent } from './home/noticias/noticia/noticias.component';
import { FooterComponent } from './compartido/footer/footer.component';
import { ListaNoticiasComponent } from './home/noticias/lista-noticias/lista-noticias.component';
import { InformacionComponent } from './home/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    NoticiasComponent,
    FooterComponent,
    ListaNoticiasComponent,
    InformacionComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule, 
    APP_ROUTING,
    CommonModule,
  ],

  providers: [ {provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})

export class AppModule { }
