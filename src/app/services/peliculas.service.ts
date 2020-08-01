import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  public api_key = 'b9ec68b85b84c08290b73f2fdaf01053';
  public urlMovieDB3 = 'https://api.themoviedb.org/3';
  public urlMovieDB4 =  'https://api.themoviedb.org/4';
  public peliculas: any[] = [];

  /**
   * Constructor
   *
   * @param http HttpClient
   */
  constructor(private http: HttpClient) { }

  /**
   * getCartelera
   *
   * Get the actual movies on 'cartelera'
   */
  getCartelera(): Observable<any> {
    const desde = new Date();
    const hasta = new Date();

    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;

    return this.http.get(`${this.urlMovieDB4}/discover/movie?primary_release_date.gte=2020-06-15&primary_release_date.lte2020-07-01`);

  }

  /**
   * getPopulares
   *
   * Get all the popular movies
   */
  getPopulares(): Observable<any> {
    return this.http.get(`${this.urlMovieDB4}/discover/movie?sort_by=popularity.desc`);
  }

  /**
   * getPopulares2019
   *
   * Get all the movies from 2019
   */
  getPopulares2019(): Observable<any> {
    return this.http.get(`${this.urlMovieDB4}/discover/movie?primary_release_year=2019&sort_by=vote_average.desc`);
 }

  /**
   * buscarPelicula
   *
   * Search for specific movie
   *
   * @param termino MovieTitle
   */
  buscarPelicula(termino: string): Observable<any> {
    return this.http.get(`${this.urlMovieDB4}/search/movie?query=${termino}&sort_by=popularity.desc`);
  }

  /**
   * getPelicula
   *
   * Get a movie from specific id
   *
   * @param id MovieId
   */
  getPelicula(id: string): Observable<any> {
    return this.http.get(`${this.urlMovieDB3}/movie/${id}?api_key=${this.api_key}`);
  }
}