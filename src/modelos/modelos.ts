export class Noticia {
    titulo: string;
    fecha_emision: Date;
    cuerpo: string;
    imagenURL?: string;
    cuerpoTotal?: string
}

export class Servicio {
    nombre: string;
    imagenURL: string;
}

export class InformacionOSDE {
    nombre: string;
    cuerpo: string;
    enlaces?: string[];
    imagenURL?: string;
}