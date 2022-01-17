import { LEVELS } from "./faceToFace-enum";
import { CANDIDATE_STATUS } from "./candidate-enum";

export class Student{
    name='';
    city='';
    country='';
    phonenumber='';
    mail='';
    tags=[''];
    faceToFace=false;
    transfer=false;
    status= CANDIDATE_STATUS.PDTE;

    constructor(name,city,country,phonenumber,mail,tags,faceToFace,transfer, status){
        this.name=name; 
        this.city=city;
        this.country=country;
        this.phonenumber=phonenumber;
        this.mail=mail;
        this.tags=tags;
        this.faceToFace=faceToFace;
        this.transfer=transfer;
        this.status = status;
    }
}