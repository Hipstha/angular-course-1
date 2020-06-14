import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';
// import 'rxjs/add/operator/map'
import 'rxjs/Rx';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey: string = "aa8b7852e886e7b21d2de065d048d0c4";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  peliculas: any[] = [];

  constructor( private jsonp:Jsonp ) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( desde.getDate() + 7 );
    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1}-${ hasta.getDate() }`
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2010-01-10&primary_release_date.lte=2010-01-17&api_key=${ this.apikey }&lenguaje=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
      .map( res => res.json().results);
  }

  getPopulares() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&lenguaje=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
        .map( res => res.json().results);
  }

  getPopularesNinos() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&lenguaje=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
        .map( res => res.json().results);
  }

  buscarPelicula( texto: string ) {
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&lenguage=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
      .map( res => {
        this.peliculas = res.json().results;
        console.log( this.peliculas );
        return res.json().results;
      });
  }

  getPelicula( id: string ) {
    let url = `${this.urlMoviedb}/movie/${ id }?api_key=${ this.apikey }&lenguage=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
      .map( res => res.json() );
  }

}
