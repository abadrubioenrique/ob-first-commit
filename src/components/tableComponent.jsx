import React from 'react';
import { Link } from 'react-router-dom';

const TableComponent = (props) => {
    return (
        <tr>
        <td className='names'><Link to="/student">{props.name}</Link></td>
        <td>{props.city}, {props.country}</td>
        <td>{props.phonenumber}</td>
        <td>{props.mail}</td>
        <td><span className='table-tag'>{props.tags[0]}</span><span className='table-tag'>{props.tags[1]}</span>
        
            {(props.tags.length>2) 
            ?  
            (<span className='table-tag'>+{props.tags.length-2}</span>) 
            : 
            null }
        
        </td>
        
        </tr>
            );
      
}

export default TableComponent;
