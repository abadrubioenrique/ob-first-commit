import React from 'react';
import '../styles/users.scss';
const Userspage = () => {
    return (
        <div className='usersPage'>

            <header className='usersHeader'>
                <div className='title-users'>
                <h1 className='title'>OpenBootcamp <span className='subtitle'>| Alumnos</span></h1>
                </div>
                <div className='username'>
                    <div className='user-icon'>
                        <h1>NA</h1>
                    </div>
                    <div className='name'>UserName
                    </div>
                    <i className="bi bi-chevron-down dropDown"></i>
                </div>
            </header>

            <div className='usersPanel'>

                <div>
                    <h2>Alumnos</h2>
                    <div className='search-bar'>
                    <i className="bi bi-search search-icon"></i>
                    <input type='text' placeholder='Buscar por Nombre, Email o Palabra clave...'/>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Userspage;
