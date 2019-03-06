import { Injectable } from '@angular/core';
import { Servicio, InformacionOSDE, Noticia } from 'src/modelos/modelos';

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {

  // Los elementos públicos además, en caso de usar llamadas al servidor por info, 
  // pueden servir para compartir info entre componentes.

  constructor() { 

  }
  
  public servicios: Servicio[]= [
      {
          nombre: 'Planes',
          imagenURL: 'src/assets/imágenes/corazon.png'
      },
      {
          nombre: 'Profesionales',
          imagenURL: 'src/assets/imágenes/doctor.png'
      },
      {
          nombre: 'Centros afiliados',
          imagenURL: 'src/assets/imágenes/hospital.png'
      }, 
      {
          nombre: 'Atención al cliente',
          imagenURL: 'src/assets/imágenes/llamar.png'
      },
      {
          nombre: 'Plataformas',
          imagenURL: 'src/assets/imágenes/movil.png'
      },
      {
          nombre: 'Convenios',
          imagenURL: 'src/assets/imágenes/tabletas.png'
      }
  ]

  public infoOSDE: InformacionOSDE[]= [
    {
        nombre: 'Conocé OSDE',
        cuerpo: 'OSDE, la primera red de servicios médicos asistenciales de Argentina, brinda a cada uno de sus socios la posibilidad de elegir libremente la mejor atención médica. OSDE significa Organización de Servicios Directos Empresarios.'
        
    },
    {
        nombre: 'Quiero trabajar en OSDE',
        cuerpo: 'En el Grupo OSDE, más de 6.500 personas trabajamos a lo largo y a lo ancho de la Argentina, con el objetivo común de brindar a nuestros socios la mejor calidad de atención.'
    },
    {
        nombre: 'Binaria seguros',
        cuerpo: 'El seguro de retiro es la posibilidad de proyectar tus sueños y metas. Contamos con productos que se adaptan a tu necesidad.'
    },
    {
        nombre: 'Interturis',
        cuerpo: 'asdasdasdasdasdasddddddddddddddddddddddddddddddddddddddddd.'
    },
    {
        nombre: 'URG urgencias',
        cuerpo: 'sdfjhaskjfhajkshfdkajhsdfkjhaskdfhaldksjflkahdhfalldsfhlakhkldsfj.'
    },
    {
        nombre: 'Fundación OSDE',
        cuerpo: 'asdasdasdasdasdasdasdsdfdfgadsfnmasbdfkjhaskjdfhakdjsfgaksdgfjkkahgsdkfjagksdfgajksjdgfkagdksjfsdsf.'
    }
  ]

  public noticias: Noticia[]= [
      {
        titulo: 'Con Binaria podés pagar menos Impuesto a las Ganancias',
        fecha_emision: new Date(2018, 11, 24),
        cuerpo: 'Con Binaria, la empresa de seguros de vida del Grupo OSDE, ahora es posible proteger tu futuro y el de  tu familia, y contar con beneficios hoy.',
        imagenURL: 'http://4.bp.blogspot.com/-XySfbI7SLT0/VXj6KcDH9KI/AAAAAAAAAAM/Rjv5RjFsiz8/s1600/USADA%2BVOLANTE%2BCONTADURIA.jpg',
      },
      {
        titulo: 'Quiero afiliar a mi pareja. ¿Qué pasos tengo que seguir',
        fecha_emision: new Date(2018, 10, 14),
        cuerpo: 'Te contamos de qué manera podés solicitar la incorporación a tu grupo familiar y cuál es la documentación a presentar según cada caso.',
        imagenURL: 'https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2018/10/17/5bc7a2f39df7b.jpeg',
      },
      {
        titulo: 'Médico a domicilio: ¿En qué caso recurrir al servicio y cuál es el teléfono?',
        fecha_emision: new Date(2019, 1, 20),
        cuerpo: 'Con OSDE, contás con un servicio de urgencias disponible las 24 horas, los 365 días del año para atender situaciones que presentan síntomas leves.',
        imagenURL: 'http://www.consensosalud.com.ar/wp-content/uploads/2017/06/medico-domicilio-300x198.jpg',         
      },
      {
        titulo: 'Médico a domicilio: ¿En qué caso recurrir al servicio y cuál es el teléfono?',
        fecha_emision: new Date(2019, 1, 20),
        cuerpo: 'Con OSDE, contás con un servicio de urgencias disponible las 24 horas, los 365 días del año para atender situaciones que presentan síntomas leves.',
        imagenURL: 'http://www.consensosalud.com.ar/wp-content/uploads/2017/06/medico-domicilio-300x198.jpg',         
      }
  ]

}
