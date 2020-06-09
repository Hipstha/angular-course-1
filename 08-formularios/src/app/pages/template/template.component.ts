import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Alejandro',
    apellido: 'Cruz',
    correo: 'alex@gmail.com',
    pais: 'ARG'
  }

  paises: any[] = [];


  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe( paises => {
        this.paises = paises;
        this.paises.unshift({
          nombre: '[Seleccione pais]',
          codigo: ''
        })
        //console.log(paises)
      });
  }

  guardar( forma: NgForm ) {
    if( forma.invalid ) {
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log( forma );
    console.log( forma.value );
  }

}
