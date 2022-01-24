import { CANDIDATE_STATUS } from "./candidate-enum";

export class Student{
    nombreCompleto='';
    ciudad='';
    pais='';
    telefono='';
    email='';
    tecnologias=[''];
    remoto=false;
    disponibilidadTraslado=false;
    estado= CANDIDATE_STATUS.PDTE;

    constructor(nombreCompleto,ciudad,pais,telefono,email,tecnologias,remoto,disponibilidadTraslado, estado){
        this.nombreCompleto=nombreCompleto; 
        this.ciudad=ciudad;
        this.pais=pais;
        this.telefono=telefono;
        this.email=email;
        this.tecnologias=tecnologias;
        this.remoto=remoto;
        this.disponibilidadTraslado=disponibilidadTraslado;
        this.estado = estado;
    }
}