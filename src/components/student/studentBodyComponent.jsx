import React from 'react';
import { CANDIDATE_STATUS } from '../../models/candidate-enum';
import { LEVELS } from '../../models/faceToFace-enum';

const StudentBodyComponent = (props) => {
    return (
        <div>
            <div className="a2">
                        <label className='credentials'>Nombre y Apellidos</label>
                        <input onChange={event => props.setName(event.target.value)} className='input-text' type='text' placeholder='Ej: Juan Perez Lorca'/>
                </div>
                <div className="data-container">
                    <div className="b2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                            <label className='credentials'>País</label>
                            <select defaultValue="" onChange={event => props.setCountry(event.target.value)} id="country" className='input-text custom-select'>
                            <option value="" disabled>Elige una opcion</option>  
                            <option value="España">España</option>
                            </select>
                </div>
                    <div className="c2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Ciudad</label>
                        <select defaultValue="" onChange={event => props.setCity(event.target.value)} className='input-text custom-select'>
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
                        <select defaultValue=""  onChange={event => props.setTransfer(event.target.value)} className='input-text custom-select'>
                            <option value="" disabled>Elige una opcion</option>
                            <option value="Con Traslado">Si</option>
                            <option value="Sin Traslado">No</option>
                        </select>
                    </div>
                    <div className="g2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Presencialidad</label>
                        <select defaultValue="" onChange={event => props.setRemote(event.target.value)} className='input-text custom-select'>
                        <option value="" disabled>Elige una opcion</option>
                            <option value={LEVELS.FACETOFACE}>Presencial</option>
                            <option value={LEVELS.REMOTE}>En remoto</option>
                            <option value={LEVELS.BOTH}>Presencial y en remoto </option>
                        </select>
                    </div>

                    {/* <div className="j2">
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
                    </div> */}
                    {/* 
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
                        <select  defaultValue="" onChange={event => props.setStatus(event.target.value)} className='input-text custom-select'>
                        <option value="" disabled>Elige una opcion</option>
                            <option value={CANDIDATE_STATUS.CONTRATADO}>Contratado</option>
                            <option value={CANDIDATE_STATUS.PRESELECIONADO}>Preselecionado</option>
                            <option value={CANDIDATE_STATUS.PDTE}>Pendiente de ofertas</option>
                        </select>
                    </div>
                </div>
        </div>
    );
}

export default StudentBodyComponent;
