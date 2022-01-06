import { PROCESS_STATUS } from "./process-enum";
export class Process{
    title='';
    num='';
    deadline='';
    status= PROCESS_STATUS.PDTE;
    


constructor(title, num, deadline, status){
    this.title = title;
    this.num = num;
    this.deadline = deadline ;
    this.status = status;
}
    
}