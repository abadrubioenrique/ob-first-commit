import React, {useState} from 'react';
import { PROCESS_STATUS } from '../../models/process-enum';

import '../../styles/status.scss';

const ThirdTab = () => {
    const [status, setStatus] = useState(PROCESS_STATUS.RECHAZADO);
    function processLevelBadge(){
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
    return (
    <div className="ThirdTab">
        <button className='btn-add'><i className="bi bi-plus-lg"></i> Añadir proceso</button>
        <div className='ofertas'>
            <div className='ofertas-title ofertas-item'><h2>Título Oferta</h2><span className='ofertas-subtitle'>Nombre Empresa SA</span></div>
            <div className='ofertas-item'><h2>7 candidatos</h2></div>
            <div className='ofertas-item'><span className='ofertas-subtitle'>Fecha plazo</span><h2>05 nov 2021</h2></div>
            <div className='ofertas-item'>{processLevelBadge()}</div>
        </div>
        <div className='ofertas'>
            <div className='ofertas-title ofertas-item'><h2>Título Oferta</h2><span className='ofertas-subtitle'>Nombre Empresa SA</span></div>
            <div className='ofertas-item'><h2>7 candidatos</h2></div>
            <div className='ofertas-item'><span className='ofertas-subtitle'>Fecha plazo</span><h2>05 nov 2021</h2></div>
            <div className='ofertas-item'>{processLevelBadge()}</div>
        </div>
        <div className='ofertas'>
            <div className='ofertas-title ofertas-item'><h2>Título Oferta</h2><span className='ofertas-subtitle'>Nombre Empresa SA</span></div>
            <div className='ofertas-item'><h2>7 candidatos</h2></div>
            <div className='ofertas-item'><span className='ofertas-subtitle'>Fecha plazo</span><h2>05 nov 2021</h2></div>
            <div className='ofertas-item'>{processLevelBadge()}</div>
        </div>
    </div>
    );
}

export default ThirdTab;
