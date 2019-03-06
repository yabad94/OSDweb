import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Servicio, InformacionOSDE } from '../../../modelos/modelos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  private servicios: Servicio[];
  private informacion: InformacionOSDE[];

  constructor(private srvInfo: ServiciosService) { 

  }

  ngOnInit() {

    this.servicios= [];
    this.informacion= [];

    this.servicios= this.srvInfo.servicios;
    this.informacion= this.srvInfo.infoOSDE;
    
    console.log(this.servicios, this.informacion);   

  }

}
