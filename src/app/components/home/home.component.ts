import { Component } from '@angular/core';

// Services

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.styles.css']
})
export class HomeComponent {

  public cartelera: any;
  public populares: any;
  public populares2019: any;

  /**
   * Constructor
   *
   * Call functions to get different types of movies
   *
   * @param _ps PeliculasService
   */
  constructor(public _ps: PeliculasService) {

    this._ps.getCartelera()
      .subscribe((data: any) => {
        this.cartelera = data.results;
      });

    this._ps.getPopulares()
      .subscribe((data: any) => {
        this.populares = data.results;
      });

    this._ps.getPopulares2019()
      .subscribe((data: any) => this.populares2019 = data.results);

  }

}
