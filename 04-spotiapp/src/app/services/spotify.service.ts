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
      'Authorization': 'Bearer BQCrMSsBV5eznlE0i0odxKoTTfzoZH3xJiCiDAlL_rY0yukheO_8o0nP5kMRUrq4YP_ux4pgMUyzaPNgKfM'
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

  getArtista( termino: string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ));
  }

}
