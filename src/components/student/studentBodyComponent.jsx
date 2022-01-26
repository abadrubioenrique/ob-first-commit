import React from 'react';

const StudentBodyComponent = (props) => {
    return (
        <div>
            <div className="a2">
                        <label className='credentials'>Nombre y Apellidos</label>
                        <input onChange={event => props.setName=(event.target.value)} defaultValue={props.name} className='input-text' type='text' placeholder='Ej: Juan Perez Lorca'/>
                </div>
                <div className="data-container">
                    <div className="b2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                            <label className='credentials'>País</label>
                            <select onChange={event => props.setCountry=(event.target.value)} defaultValue={props.country} id="country" className='input-text custom-select'>
                            <option value="" disabled>Elige una opción</option>  
                            <option value="España">España</option>
                            </select>
                </div>
                    <div className="c2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Ciudad</label>
                        <select onChange={event => props.setCity=(event.target.value)} defaultValue={props.city} className='input-text custom-select'>
                            <option value="" disabled>Elige una opción</option>
                            <option value="Valencia">Valencia</option>
                            <option value="Oviedo">Oviedo</option>
                            <option value="Sevilla">Sevilla</option>
                        </select>
                    </div>
                    <div className="d2">
                        <label className='credentials'>Nº Teléfono</label>
                        <input className='input-text' type='text' defaultValue = {props.phonenumber} placeholder='Ej: +34 612 34 56 78'/>
                    </div>
                    <div className="e2">
                        <label className='credentials'>Email</label>
                        <input className='input-text' type='email' defaultValue = {props.mail} placeholder='Ej: user@mail.com'/>
                    </div>
                    <div className="f2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Traslado</label>
                        <select  onChange={event => props.setTransfer=(event.target.value)} defaultValue ={props.transfer} className='input-text custom-select'>
                            <option value="" disabled>Elige una opción</option>
                            <option value="Con Traslado">Si</option>
                            <option value="Sin Traslado">No</option>
                        </select>
                    </div>
                    <div className="g2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Presencialidad</label>
                        <select onChange={event => props.setRemote=(event.target.value)} defaultValue={props.remote} className='input-text custom-select'>
                        <option value="" disabled>Elige una opción</option>
                            <option value={false}>Presencial</option>
                            <option value={true}>En remoto</option>

                        </select>
                    </div>
                    <div className="h2">
                        <label className='credentials'>Enlace a Linkedin</label>
                        <input className='input-text' type='email' defaultValue={props.linkedin} placeholder='Ej: https://linkedin.com/user_id'/>
                    </div>
                    <div className="i2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Estado Laboral</label>
                        <select onChange={event => props.setStatus=(event.target.value)} defaultValue= {props.status} className='input-text custom-select'>
                        <option value="" disabled>Elige una opción</option>
                            <option value="contratado">Contratado</option>
                            <option value="en_proceso">Preselecionado</option>
                            <option value="libre">Pendiente de ofertas</option>
                        </select>
                    </div>
                </div>
        </div>
    );
}

export default StudentBodyComponent;
