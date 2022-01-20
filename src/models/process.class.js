import { PROCESS_STATUS } from "./process-enum";

export class Process{
    title='';
    business='';
    numCand='';
    deadline=Date();
    status= PROCESS_STATUS.PDTE;
    
constructor(title,business, numCand, deadline, status){
    this.title = title;
    this.business = business;
    this.numCand = numCand;
    this.deadline = deadline ;
    this.status = status;
}
    
}