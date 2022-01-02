import React from 'react';

const TableComponent = (props) => {
    return (
        <tr>
        <td className='names'>{props.name}</td>
        <td>{props.city}</td>
        <td>{props.country}</td>
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
