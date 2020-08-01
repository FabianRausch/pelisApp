import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';
import { CommonModule } from '@angular/common';

// Pipes

import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

// Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { LoginComponent } from './components/login/login.component';

// Interceptors
import { authInterceptorProviders } from '../helpers/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
