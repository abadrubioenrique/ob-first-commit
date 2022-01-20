import React, {useState} from 'react';
import { PROCESS_STATUS } from '../../models/process-enum';
import { Process } from '../../models/process.class';

import '../../styles/status.scss';

const ThirdTab = () => {
    const [status, setStatus] = useState(PROCESS_STATUS.RECHAZADO);
    const dateOptions = {day: '2-digit' , month: 'short', year: 'numeric' };
    const process1 = new Process("Título Oferta 1","Empresa SA", 7, new Date('11-5-2022'),PROCESS_STATUS.CONTRATADO)
    const process2 = new Process("Título Oferta 2","Empresa SA", 5, new Date('8 nov 2022'),PROCESS_STATUS.PDTE_ENTREVISTA)
    const process3 = new Process("Título Oferta 3","Empresa SA", 3, new Date('10 nov 2022'),PROCESS_STATUS.ENTREVISTADO)
    const process4 = new Process("Título Oferta 4","Empresa SA", 1, new Date('15 nov 2022'),PROCESS_STATUS.ESPERANDO_CV)
    const process5 = new Process("Título Oferta 5","Empresa SA", 2, new Date('18 nov 2022'),PROCESS_STATUS.RECHAZADO)
    const [processes, setProcesses] = useState([process1 , process2, process3, process4, process5]);

    let processesNum = processes.length;

    function processLevelBadge(status){
        switch (status) {
            case PROCESS_STATUS.PDTE_ENTREVISTA:
                return(
                    <div className='status-main-right'>
                        <span className='status bg-powerblue'>{status}</span>
                    </div>
                )
            case PROCESS_STATUS.ENTREVISTADO:
                return(
                    <div className='status-main-right'>
                    <span className='status bg-blue'>
                        {status}
                    </span>
                    </div>
                )
            case PROCESS_STATUS.ESPERANDO_CV:
                return(
                    <div className='status-main-right'>
                    <span className='status bg-blue'>
                        {status}
                    </span>
                    </div>
                )
            case PROCESS_STATUS.RECHAZADO:
                return(
                    <div className='status-main-right'>
                    <span className='status bg-wrong'>
                        {status}
                    </span>
                    </div>
                )
            case PROCESS_STATUS.CONTRATADO:
                return(
                    <div className='status-main-right'>
                    <span className='status bg-powergreen'>
                        {status}
                    </span>
                    </div>
                )
            default:
                return(
                    <div className='status-main-right'>
                    <span className='status bg-grey'>
                        No definido
                    </span>
                    </div>
                )
        }
    }
    const Processes = ({ title, business, numCand,deadline,status }) => {
        return (
        <div className='ofertas'>
            <div className='ofertas-title ofertas-item'><h2>{title}</h2><span className='ofertas-subtitle'>{business}</span></div>
            <div className='ofertas-item'><h2>{numCand} candidatos</h2></div>
            <div className='ofertas-item'><span className='ofertas-subtitle'>Fecha plazo</span><h2>{deadline}</h2></div>
            <div className='ofertas-item'>{status}</div>
        </div>
        );
      };
    return (
    <div className="ThirdTab">
        <button className='btn-add'><i className="bi bi-plus-lg"></i> Añadir proceso</button>
        {processes.map(process =>
            <Processes 
               key={process.title}
               title={process.title}
               business={process.business}
               numCand={process.numCand}
               deadline={process.deadline.toLocaleDateString("es", dateOptions)}
               status={processLevelBadge(process.status)}
           />          
        )}

    </div>
    );
}

export default ThirdTab;
