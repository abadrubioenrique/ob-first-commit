import React from 'react';
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
    return (
        <header className='usersHeader'>
        <div className='global-search'>
        <i className="bi bi-search search-icon"></i>
                <input 
                type='text' 
                placeholder='Buscar por Nombre, Email o Palabra clave...'/>
        </div>
            <div className='username'>
                <div className='user-icon'>
                    <h1>NA</h1>
                </div>
                <div className='name'><Link to="/open-recruiter/student/info">Nombre</Link>
                </div>
                <i className="bi bi-chevron-down dropDown"></i>
            </div>
        </header>
    );
}

export default HeaderComponent;
