import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { LEVELS } from '../models/faceToFace-enum';
import '../styles/users.scss';
import '../styles/student.scss';
import '../styles/select.scss';
import Tagcomponent from '../components/tagComponent';

const Studentpage = () => {
    const [name, setName] = useState('Nombre Alumno');
    const [city, setCity] = useState('City');
    const [country, setCountry] = useState('Country');
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
                <div className='name'>
                <Link to="/student">UserName</Link>
                </div>
                <i className="bi bi-chevron-down dropDown"></i>
            </div>
        </header>
        <div class="student-cv">
            <div class="pdf">
                <embed src="https://www.mheducation.es/bcv/guide/capitulo/8448148681.pdf" type="application/pdf"/>
            </div>
        </div>
        <div className="usersPanel">
            <div className="students-data">
                <div className="student-info">
                    <img className="student-img" src="https://st.depositphotos.com/2251265/2417/i/600/depositphotos_24172293-stock-photo-faceless-person-portrait.jpg" alt='profile_img'/>
                        <div id="student-name" className="student-name"><h1>{name}</h1>
                            <div className="student-ubication">
                                <i className="bi bi-geo-alt"></i>
                                <p>{city}</p>
                                <span>|</span>
                                <p>{country}</p>
                            </div>
                        </div>
                </div>
                    <div className="a2">
                            <label className='credentials'>Nombre y Apellidos</label>
                            <input onChange={event => setName(event.target.value)} className='input-text' type='text' placeholder='Ej: Juan Perez Lorca'/>
                    </div>
                    <div className="data-container">
                        <div className="b2">
                              <label className='credentials'>País</label>
                              <select onChange={event => setCountry(event.target.value)} id="country" className='input-text custom-select'>
                                <option selected disabled>Elija una opcion</option>  
                                <option value="España">España</option>
                              </select>
                    </div>
                        <div className="c2">
                            <label className='credentials'>Ciudad</label>
                            <select onChange={event => setCity(event.target.value)} className='input-text custom-select'>
                                <option selected disabled>Elija una opcion</option>
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
                            <label className='credentials'>Presencialidad</label>
                            <select className='input-text custom-select'>
                                <option selected disabled>Elija una opcion</option>
                                <option value={LEVELS.FACETOFACE}>Presencial</option>
                                <option value={LEVELS.REMOTE}>En remoto</option>
                                <option value={LEVELS.BOTH}>Presencial y en remoto </option>
                            </select>
                        </div>
                        <div className="g2">
                            <label className='credentials'>Traslado</label>
                            <select className='input-text custom-select'>
                                <option selected disabled>Elija una opcion</option>
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
