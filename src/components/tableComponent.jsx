import React from 'react';
import { Link } from 'react-router-dom';

const TableComponent = (props) => {
    return (
        <tr>
        <td className='names'><Link to={`/open-recruiter/candidates/${props.id}/info`}>{props.name}</Link></td>
        <td>{props.city}, {props.country}</td>
        <td>{props.phonenumber}</td>
        <td>{props.mail}</td>
        <td>
        {(props.tags.length===0) 
            ?  
            null
            : 
            (<span className='table-tag'>{props.tags[0]}</span>)  }
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
        <td></td>
        </tr>
    );
      
}

export default TableComponent;
