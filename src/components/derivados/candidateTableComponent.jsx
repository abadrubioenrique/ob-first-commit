import React from 'react';
import { CANDIDATE_STATUS } from '../../models/candidate-enum';
import '../../styles/status.scss';
const TableComponent = (props) => {
    function candidateLevelBadge(){
        switch (props.status) {
            case CANDIDATE_STATUS.PDTE:
                return(
                    <td >
                        <span className='status bg-powerblue'>{props.status}</span>
                    </td>
       )
            case CANDIDATE_STATUS.PRESELECIONADO:
                return(
                    <td>
                    <span className='status bg-blue'>
                        {props.status}
                    </span>
                    </td>
)
            case CANDIDATE_STATUS.CONTRATADO:
                return(
                    <td>
                    <span className='status bg-powergreen'>
                        {props.status}
                    </span>
                    </td>
)
            default:
                break;
        }
    }
    return (
        <tr>
        <td className='names'>{props.name}</td>
        <td>{props.city}, {props.country}</td>
        <td>{props.phonenumber}</td>
        <td><span className='table-tag'>{props.tags[0]}</span><span className='table-tag'>{props.tags[1]}</span>
        
            {(props.tags.length>2) 
            ?  
            (<span className='table-tag'>+{props.tags.length-2}</span>) 
            : 
            null }
        
        </td>
        {candidateLevelBadge()}
        </tr>
            );
      
}

export default TableComponent;
