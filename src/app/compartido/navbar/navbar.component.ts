import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  private sectores: string[]= ['Empresas', 'Prestadores', 'Proveedores', 'Socios']

  constructor() { }

  ngOnInit() {

    let sectorActual: string= 'Socios'; //settear dependiendo del sector donde nos encontremos, no es lo idea pero por el momento.

    if(this.sectores.indexOf(sectorActual)> -1){
      this.sectores.splice(this.sectores.indexOf(sectorActual),1);
    }

    console.log(this.sectores);  

  }

}
