import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../store/slices/auth'
import { useDispatch } from 'react-redux';
const HeaderComponent = (props) => {
    const dispatch = useDispatch();
    function logOutUser(){
        dispatch(logout());
    }
    return (
        <header className='usersHeader'>
        <div className='global-search'>
        <i className="bi bi-search search-icon"></i>
                <input 
                type='text' 
                placeholder='Buscar por Nombre, Email o Palabra clave...'
                value={props.search}
                    onChange={(e)=> props.setSearch(e.target.value)}  
                />
        </div>
            <div className='username'>
                <div className='user-icon'>
                    <h1>NA</h1>
                </div>
                <div className='name'>
                <p>Nombre</p>
                <div className='dropdown-content'>
                    <p onClick={logOutUser}>LogOut</p>
                    <i className="bi bi-power"></i>
                </div>
                </div>
                <i className="bi bi-chevron-down dropDown"></i>

            </div>
            
            
        </header>
    );
}

export default HeaderComponent;
