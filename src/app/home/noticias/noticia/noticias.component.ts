import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../servicios/servicios.service';
import { Noticia } from 'src/modelos/modelos';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {

  private noticias: Noticia[];

  constructor(private srvNoti: ServiciosService) { }

  ngOnInit() {

    this.noticias= [];
    this.noticias= this.srvNoti.noticias;

  }

}
