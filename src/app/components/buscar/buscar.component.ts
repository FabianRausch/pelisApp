import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.styles.css']
})
export class BuscarComponent {
  public buscar: string;
  public peliculas: Array<any>;

  /**
   * Constructor
   *
   * Get params from router and search a specific movie
   *
   * @param _ps PeliculasService
   * @param router Router
   */
  constructor(
    public _ps: PeliculasService,
    public router: ActivatedRoute
  ) {
    this.router.params.subscribe(params => {
      if (params['texto']) {
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    });
  }

  /**
   * buscarPelicula
   *
   * Search for a specific movie if the length is more than 1 character
   */
  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }

    this._ps.buscarPelicula(this.buscar)
      .subscribe(
        data => {
          console.log(data.results);
          this.peliculas = data.results
        }
      );
  }

}
