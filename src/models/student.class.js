import { LEVELS } from "./faceToFace-enum";
export class Student{
    name='';
    city='';
    country='';
    phonenumber='';
    mail='';
    tags=[''];
    faceToFace=LEVELS.REMOTE;
    transfer=true;

    constructor(name,city,country,phonenumber,mail,tags,faceToFace,transfer){
        this.name=name;
        this.city=city;
        this.country=country;
        this.phonenumber=phonenumber;
        this.mail=mail;
        this.tags=tags;
        this.faceToFace=faceToFace;
        this.transfer=transfer;
    }
}