import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Checkbox } from '../components/checkbox';
import { login,loginRemember } from '../store/slices/auth';
import '../styles/login.scss';

const UserLogin = () => {
    const [requestError, setRequestError] = useState('');
    const dispatch = useDispatch();
    const isLogging = useSelector((state) => state.auth.isLoggedIn)
    const [checkedRemember, setCheckedRemember]= useState(false);
    const [datos, setDatos] = useState(
        {
            data: [],
            form: {
                email: '',
                password: ''
            }
        }
    );

    const handleRemember =()=>{
        setCheckedRemember(!checkedRemember);
    }

    const handleChange = async e => {
        e.persist();
        await setDatos({
            form: {
                ...datos.form,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = async e => {

        e.preventDefault();
        setRequestError('');

        let email = datos.form.email;
        let password = datos.form.password;

        if(checkedRemember===false){
            dispatch(login({ email, password }))
            .unwrap()
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                setRequestError("Hubo un error, compruebe su email y contraseña.");
            });
        }else{
            dispatch(loginRemember({ email, password }))
            .unwrap()
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                setRequestError("Hubo un error, compruebe su email y contraseña.");
            });
        }
        
    }
    const { form } = datos;


    return (
        <>
            {
                !isLogging ?
        <div className='login-page'>
        <div className='login-panel'>
        <div className='login-panel-sub'>
            <h1 className='title'>OpenBootcamp <span className='subtitle'>| Alumnos</span></h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label className='credentials'>Email</label>
                <input className='input-text' maxLength="50" type="email" placeholder='Introduce tu correo' name="email" id="email" required onChange={handleChange} value={form ? form.email : ''} />
            </div>
            <div>
                <label className='credentials'>Contraseña</label>
                <input className='input-text' type="password" placeholder='Introduce tu contraseña' name="password" id="password" required onChange={handleChange} value={form ? form.password : ''} />
            </div>
            <div className='remember'>
                <Checkbox
                    label="Recuérdame"
                    value={checkedRemember}
                    onChange={handleRemember}
                ></Checkbox>

                <a className='recovery' href='https://www.google.es'>He olvidado la contraseña</a>
            </div>

            <button type='submit' className='btn-login'>Iniciar Sesión</button>
            </form>
            </div>
            <div className='copyright'>
                <p>Copyright © 2021 Open Bootcamp SL, Imagina Group</p>
                <p>Todos los derechos reservados.</p>
                <p className='privacy-policy'>Política de Privacidad</p>
            </div>
        </div>
        
        
        </div>

        : 
            <Navigate to="/open-recruiter/customers" />
        }


        </>
    )
}


export default UserLogin;
