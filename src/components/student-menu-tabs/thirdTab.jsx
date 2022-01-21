import React from 'react';
import { PROCESS_STATUS } from '../../models/process-enum';

import '../../styles/status.scss';

const ThirdTab = (props) => {
    const dateOptions = {day: '2-digit' , month: 'short', year: 'numeric' };


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
        {props.processes.map(process =>
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
