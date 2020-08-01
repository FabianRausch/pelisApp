import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.styles.css']
})
export class PeliculaComponent {

  public pelicula: any;
  public regresarA: string;
  public busqueda: string;

  /**
   * Constructor
   *
   * Call getPelicula and pass some variables for search movie by page and query
   *
   * @param _ps PeliculasService
   * @param router ActivatedRoute
   */
  constructor(
    public _ps: PeliculasService,
    public router: ActivatedRoute
  ) {
    this.router.params.subscribe(params => {
      this.regresarA = params['pag'];

      if (params['busqueda']) {
        this.busqueda = params['busqueda'];
      }

      this._ps.getPelicula(params['id'])
        .subscribe(pelicula => {
          console.log(pelicula);
          this.pelicula = pelicula
        });
    });
  }

}
