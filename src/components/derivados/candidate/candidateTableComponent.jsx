import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/status.scss';
const TableComponent = (props) => {
    function candidateLevelBadge(){
        switch (props.status) {
            case "libre":
                return(
                    <td className='status-main'>
                        <span className='status bg-powerblue'>PDTE. OFERTAS</span>
                    </td>
                )
            case "en_proceso":
                return(
                    <td className='status-main'>
                        <span className='status bg-blue'>
                        PRESELECIONADO
                        </span>
                    </td>
                )
            case "contratado":
                return(
                    <td className='status-main'>
                        <span className='status bg-powergreen'>
                            {props.status}
                        </span>
                    </td>
                )
            case "descartado":
                return(
                    <td className='status-main'>
                        <span className='status bg-wrong'>
                            RECHAZADO
                        </span>
                    </td>
                )
            default:
                return(
                    <td className='status-main'>
                        <span className='status bg-grey'>
                            No definido
                        </span>
                    </td>
                )
        }
    }
    return (
        <tr>
        
        <td className='names' id={props.id} ><Link to={`/open-recruiter/student/${props.id}/info`}>{props.name}</Link></td>
        <td>{props.city}, {props.country}</td>
        <td>{props.phonenumber}</td>
        <td><span className='table-tag'>{props.tags[0]}</span>
        {(props.tags.length>1) 
            ?  
            (<span className='table-tag'>{props.tags[1]}</span>) 
            : 
            null }
        
        
            {(props.tags.length>2) 
            ?  
            (<span className='table-tag'>+{props.tags.length-2}</span>) 
            : 
            null }
        
        </td>
        {candidateLevelBadge()} 
        <td></td>
        </tr>
    );
      
}

export default TableComponent;
