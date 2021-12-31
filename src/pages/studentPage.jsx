import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/student.scss';
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
        <div class="usersPanel">
            <div class="students-data">
                <div class="student-info">
                    <img class="student-img" src="https://st.depositphotos.com/2251265/2417/i/600/depositphotos_24172293-stock-photo-faceless-person-portrait.jpg"/>
                        <div id="student-name" class="student-name"><h1>Nombre Alumno</h1>
                            <div class="student-ubication">
                                <i class="bi bi-geo-alt"></i>
                                <p>City</p>
                                <span>|</span>
                                <p>Country</p>
                            </div>
                        </div>
                </div>
                    <div class="a2">
                            <label class='credentials'>Nombre y Apellidos</label>
                            <input class='input-text' type='text' placeholder='Ej: Juan Perez Lorca'/>
                    </div>
                    <div class="data-container">
                        <div class="b2">
                              <label class='credentials'>País</label>
                              <select id="country" class='input-text' >
                                  <option value="" disabled selected>Elige un país</option>
                                  <option value="España">España</option>
                              </select>
              
                    </div>
                        <div class="c2">
                            <label class='credentials'>Ciudad</label>
                            <select id="city" class='input-text'>
                                <option value="" disabled selected>Elige una ciudad</option>
                                <option value="Valencia">Valencia</option>
                                <option value="Sevilla">Sevilla</option>
                                <option value="Gijón">Gijón</option>
                                <option value="Oviedo">Oviedo</option>
                            </select>
                        </div>
                        <div class="d2">
                            <label class='credentials'>Nº Teléfono</label>
                            <input class='input-text' type='text' placeholder='Ej: +34 612 34 56 78'/>
                        </div>
                        <div class="e2">
                            <label class='credentials'>Email</label>
                            <input class='input-text' type='email' placeholder='Ej: user@mail.com'/>
                        </div>
                        <div class="f2">
                            <label class='credentials'>Presencialidad</label>
                            <select class='input-text'>
                                <option value="-" disabled selected>Elige una opción</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="g2">
                            <label class='credentials'>Traslado</label>
                            <select class='input-text'>
                                <option value="-" disabled selected>Elige una opción</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="h2">
                            <label class='credentials'>Documento CV</label>
                            <div class="upload">
                                <button class="btn-upload">
                                    Subir de nuevo
                                    <i class="bi bi-cloud-arrow-up"></i>
                                </button>
                                <button class="btn-delete">
                                Borrar
                                <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                        <div class="i2">
                            <label class='credentials '>Etiquetas</label>
                            <div class="student-tags">
                            <select class='input-text'>
                                <option value="-" disabled selected>Elige una opción</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
}

export default Studentpage;
