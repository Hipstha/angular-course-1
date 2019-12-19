import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any = [];

  loadingArtist: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {

    this.loadingArtist = true;

    this.router.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTraks( params['id'] );
      //this.loadingArtist = false;
    })

  }

  getArtista( id: string ) {

    this.spotify.getArtista( id )
          .subscribe( artista => {
            console.log( artista );
            this.loadingArtist = false;
            this.artista = artista;
          });

  }

  getTopTraks( id: string ) {
    this.spotify.getTopTraks( id ).subscribe( topTracks => {
      console.log( topTracks );
      this.topTracks = topTracks;
    })
  }

}
