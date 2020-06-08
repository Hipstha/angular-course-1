import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Listo')
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAdamcvIFnTM9-UNW5FqbCVGK_4P5V5i20N5Qxit2bjJTKx_Qc_-26KdMCNxyKQ03UJJ3oKjSZ5bi1gAqI'
    });

    return this.http.get( url, { headers });
  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQADH7KQJ3Ia8zDyoLuUxjcOPbrluBcpsJXX5mv_V3Raq-F1q4HYLLXFF1JRorlY7yIOqQhPYXr-1ha-6kk'
    // });

    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ));
  }

  getArtista ( id: string ){
    return this.getQuery(`artists/${ id }`);
                // .pipe( map( data => data['artists'].items ));
  }

  getTopTraks ( id: string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks'] ));
  }

}
