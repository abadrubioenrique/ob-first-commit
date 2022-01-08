import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { LEVELS } from '../models/faceToFace-enum';
import {CANDIDATE_STATUS} from '../models/candidate-enum';
import '../styles/users.scss';
import '../styles/student.scss';
import '../styles/select.scss';
import Tagcomponent from '../components/tagComponent';
import MenuComponent from '../components/menuComponent';
import HeaderComponent from '../components/headerComponent';
import StudentHeaderComponent from '../components/studentHeaderComponent';

const Studentpage = () => {
    const [name, setName] = useState('Nombre Alumno');
    const [city, setCity] = useState('Ciudad');
    const [country, setCountry] = useState('País');
    const [remote, setRemote] = useState('Presencialidad');
    const [transfer, setTransfer] = useState('Traslado');
    const [status, setStatus] = useState('No definido');

    

    return (
    <div className='studentsPage'>
            <MenuComponent/>
            <HeaderComponent/>
{/*         <div className="student-cv">
            <div className="pdf">
                <embed src="https://www.mheducation.es/bcv/guide/capitulo/8448148681.pdf" type="application/pdf"/>
            </div>
        </div> */}
        <div className="usersPanel">
        <div className='rute'><Link to='/candidates'><h1>Candidatos</h1></Link><i className="bi bi-chevron-left"></i><h1 className='active-route'>{name}</h1></div>
        <div className="students-data">
            <StudentHeaderComponent
                name={name}
                city={city}
                country={country}
                remote={remote}
                transfer={transfer}
                status={status}
            >
            </StudentHeaderComponent>
            <div className='student-menu'>
                <div className='student-menu-element st-active'>
                <h1>Información</h1>
                <div className='marcador'></div>
                </div>
                <div className='student-menu-element'><h1>Habilidades</h1></div>
                <div className='student-menu-element'><h1>Currículum Vitae</h1></div>
                <div className='student-menu-element'><h1>Procesos</h1></div>
            </div>
                <div className="a2">
                        <label className='credentials'>Nombre y Apellidos</label>
                        <input onChange={event => setName(event.target.value)} className='input-text' type='text' placeholder='Ej: Juan Perez Lorca'/>
                </div>
                <div className="data-container">
                    <div className="b2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                            <label className='credentials'>País</label>
                            <select defaultValue="" onChange={event => setCountry(event.target.value)} id="country" className='input-text custom-select'>
                            <option value="" disabled>Elige una opcion</option>  
                            <option value="España">España</option>
                            </select>
                </div>
                    <div className="c2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Ciudad</label>
                        <select defaultValue="" onChange={event => setCity(event.target.value)} className='input-text custom-select'>
                            <option value="" disabled>Elige una opcion</option>
                            <option value="Valencia">Valencia</option>
                            <option value="Oviedo">Oviedo</option>
                            <option value="Sevilla">Sevilla</option>
                        </select>
                    </div>
                    <div className="d2">
                        <label className='credentials'>Nº Teléfono</label>
                        <input className='input-text' type='text' placeholder='Ej: +34 612 34 56 78'/>
                    </div>
                    <div className="e2">
                        <label className='credentials'>Email</label>
                        <input className='input-text' type='email' placeholder='Ej: user@mail.com'/>
                    </div>
                    <div className="f2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Traslado</label>
                        <select defaultValue=""  onChange={event => setTransfer(event.target.value)} className='input-text custom-select'>
                            <option value="" disabled>Elige una opcion</option>
                            <option value="Con Traslado">Si</option>
                            <option value="Sin Traslado">No</option>
                        </select>
                    </div>
                    <div className="g2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Presencialidad</label>
                        <select defaultValue="" onChange={event => setRemote(event.target.value)} className='input-text custom-select'>
                        <option value="" disabled>Elige una opcion</option>
                            <option value={LEVELS.FACETOFACE}>Presencial</option>
                            <option value={LEVELS.REMOTE}>En remoto</option>
                            <option value={LEVELS.BOTH}>Presencial y en remoto </option>
                        </select>
                    </div>

                    {/* <div className="h2">
                        <label className='credentials'>Documento CV</label>
                        <div className="upload">
                            <button className="btn-upload">
                                Subir de nuevo
                                <i className="bi bi-cloud-arrow-up"></i>
                            </button>
                            <button className="btn-delete">
                            Borrar
                            <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div className="i2">
                        <Tagcomponent></Tagcomponent>
                    </div> */}

                    <div className="h2">
                        <label className='credentials'>Enlace a Linkedin</label>
                        <input className='input-text' type='email' placeholder='Ej: https://linkedin.com/user_id'/>
                    </div>
                    <div className="i2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Estado Laboral</label>
                        <select  defaultValue="" onChange={event => setStatus(event.target.value)} className='input-text custom-select'>
                        <option value="" disabled>Elige una opcion</option>
                            <option value={CANDIDATE_STATUS.CONTRATADO}>Contratado</option>
                            <option value={CANDIDATE_STATUS.PRESELECIONADO}>Preselecionado</option>
                            <option value={CANDIDATE_STATUS.PDTE}>Pendiente de ofertas</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Studentpage;
