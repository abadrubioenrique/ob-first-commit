import React from 'react';
import { Link } from 'react-router-dom';
import { CANDIDATE_STATUS } from '../../../models/candidate-enum';

import '../../../styles/status.scss';
const TableComponent = (props) => {
    function candidateLevelBadge(){
        switch (props.status) {
            case CANDIDATE_STATUS.PDTE:
                return(
                    <td className='status-main'>
                        <span className='status bg-powerblue'>{props.status}</span>
                    </td>
                )
            case CANDIDATE_STATUS.PRESELECIONADO:
                return(
                    <td className='status-main'>
                        <span className='status bg-blue'>
                            {props.status}
                        </span>
                    </td>
                )
            case CANDIDATE_STATUS.CONTRATADO:
                return(
                    <td className='status-main'>
                        <span className='status bg-powergreen'>
                            {props.status}
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
        <td className='names'><Link to="/student">{props.name}</Link></td>
        <td>{props.city}, {props.country}</td>
        <td>{props.phonenumber}</td>
        <td><span className='table-tag'>{props.tags[0]}
        </span><span className='table-tag'>{props.tags[1]}</span>
        
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
