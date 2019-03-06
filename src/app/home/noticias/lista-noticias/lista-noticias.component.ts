import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../servicios/servicios.service';
import { Noticia } from 'src/modelos/modelos';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})

export class ListaNoticiasComponent implements OnInit {

  private  noticias: Noticia[];

  constructor(private srvNoti: ServiciosService) { }

  ngOnInit() {

    this.noticias= [];
    this.noticias= this.srvNoti.noticias;

  }

}
