import { Routes, RouterModule } from '@angular/router';

// Componentes

import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'pelicula/:id/:pag', component: PeliculaComponent },
  { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
