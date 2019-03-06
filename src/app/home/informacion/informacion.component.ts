import { Component, OnInit } from '@angular/core';
import { InformacionOSDE } from 'src/modelos/modelos';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})

export class InformacionComponent implements OnInit {

  private informacion: InformacionOSDE[];

  constructor(private srvInfo: ServiciosService) { 

  }

  ngOnInit() {

    this.informacion= [];
    this.informacion= this.srvInfo.infoOSDE;

  }
}
