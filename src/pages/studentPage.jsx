import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/users.scss';
import '../styles/student.scss';
import '../styles/select.scss';
import Tagcomponent from '../components/tagComponent';

const Studentpage = () => {
    return (
    <div className='studentsPage'>
        <header className='usersHeader'>
                        <div className='title-users'>
                        <h1 className='title'>OpenBootcamp <span className='subtitle'>| Alumnos</span></h1>
                        </div>
                        <div className='username'>
                            <div className='user-icon'>
                                <h1>NA</h1>
                            </div>
                            <div className='name'><Link to="/student">UserName</Link>
                            </div>
                            <i className="bi bi-chevron-down dropDown"></i>
                        </div>
        </header>
        <div className="usersPanel">
            <div className="students-data">
                <div className="student-info">
                    <img className="student-img" src="https://st.depositphotos.com/2251265/2417/i/600/depositphotos_24172293-stock-photo-faceless-person-portrait.jpg"/>
                        <div id="student-name" className="student-name"><h1>Nombre Alumno</h1>
                            <div className="student-ubication">
                                <i className="bi bi-geo-alt"></i>
                                <p>City</p>
                                <span>|</span>
                                <p>Country</p>
                            </div>
                        </div>
                </div>
                    <div className="a2">
                            <label className='credentials'>Nombre y Apellidos</label>
                            <input className='input-text' type='text' placeholder='Ej: Juan Perez Lorca'/>
                    </div>
                    <div className="data-container">
                        <div className="b2">
                              <label className='credentials'>País</label>
                              <select id="country" className='input-text custom-select'>
                                  <option value="España">España</option>
                              </select>
              
                    </div>
                        <div className="c2">
                            <label className='credentials'>Ciudad</label>
                            <select className='input-text custom-select'>
                                <option value="valencia">Valencia</option>
                                <option value="oviedo">Oviedo</option>
                                <option value="sevilla">Sevilla</option>
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
                            <label className='credentials'>Presencialidad</label>
                            <select className='input-text custom-select'>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="g2">
                            <label className='credentials'>Traslado</label>
                            <select className='input-text custom-select'>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="h2">
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
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
}

export default Studentpage;
