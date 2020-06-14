import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaIMagenesService } from '../../service/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreElemento: boolean = false;
  archivos: FileItem[] = [];

  constructor( public _cargaImagenes: CargaIMagenesService ) { }

  ngOnInit() {
  }

  cargarImagenes() {
    this._cargaImagenes.cargarImagenesFirebase( this.archivos );
  }

  pruebaSobreElemento( event ){
    console.log( event );
  }

  limpiarArchivos() {
    this.archivos = [];
  }

}
