import React from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import '../styles/menu.scss'
const MenuComponent = () => {
    return (
        <div className='menu'>
        <div className='menu_title'>
        <h1>Open<span>Recruiter</span></h1>
        <div className='menu_container'>
            <div className='menu_element'>
            <i class="bi bi-briefcase"></i>
            <h2>Ofertas</h2>
            
            </div>
            <div className='menu_element'>
                <i class="bi bi-people"></i>
                <h2>Candidatos</h2>
            
            </div>
            <NavLink to="/users" className={({ isActive }) => 'menu_element ' + (isActive ? 'active' : '')}>
                <i class="bi bi-building"></i>
                <h2>Clientes</h2>
            
            </NavLink>
            <div className='menu_element'>
            <i class="bi bi-calendar3"></i>
                <h2>Entrevistas</h2>
            
            </div>
        </div>
        </div>
            
        </div>
    );
}

export default MenuComponent;
