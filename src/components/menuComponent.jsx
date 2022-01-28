import React from 'react';
import {  NavLink } from 'react-router-dom';
import '../styles/menu.scss'
const MenuComponent = () => {
    return (
        <div className='menu'>
        <div className='menu_title'>
        <h1>Open<span>Recruiter</span></h1>
        <div className='menu_container'>
            <div className='menu_element'>
            <i className="bi bi-briefcase"></i>
            <h2>Ofertas</h2>
            
            </div>
            <NavLink to="/open-recruiter/candidates" className={({ isActive }) => 'menu_element ' + (isActive ? 'active' : '')}>
                <i className="bi bi-people"></i>
                <h2>Candidatos</h2>
            
            </NavLink>
            <NavLink to="/open-recruiter/customers" className={({ isActive }) => 'menu_element ' + (isActive ? 'active' : '')}>
                <i className="bi bi-building"></i>
                <h2>Clientes</h2>
            
            </NavLink>
            <div className='menu_element'>
            <i className="bi bi-calendar3"></i>
                <h2>Entrevistas</h2>
            
            </div>
        </div>
        </div>
            
        </div>
    );
}

export default MenuComponent;
