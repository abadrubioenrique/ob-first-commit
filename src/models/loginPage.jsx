import React from 'react';
import '../styles/login.scss';
import { Link } from 'react-router-dom';

const Loginpage = () => {
    return (
        <div className='login-page'>
        <div className='login-panel'>
        <div className='login-panel-sub'>
            <h1 className='title'>OpenBootcamp <span className='subtitle'>| Alumnos</span></h1>
            <div>
                <label className='credentials'>Email</label>
                <input className='input-text' type='text' placeholder='Introduce tu correo'/>
            </div>
            <div>
                <label className='credentials'>Contraseña</label>
                <input className='input-text' type='text' placeholder='Introduce tu contraseña'/>
            </div>
            <div className='remember'>
                <label className="remember-label">Recuérdame
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <a className='recovery' href='https://www.google.es'>He olvidado la contraseña</a>
            </div>

            <Link to="/users" className='btn-login'>Iniciar Sesión</Link>
            </div>
            <footer className='copyright'>
                <p>Copyright © 2021 Open Bootcamp SL, Imagina Group</p>
                <p>Todos los derechos reservados.</p>
                <p>Política de Privacidad</p>
            </footer>
        </div>
        
        
        </div>
        
    );
}

export default Loginpage;
