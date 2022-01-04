import React, {useState, useEffect} from 'react';
import { LEVELS } from '../models/faceToFace-enum';
import '../styles/select.scss'
import '../styles/modal.scss';
import Tagcomponent from './tagComponent';
const ModalComponent = () => {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        console.log(show);
    }, [show])
    return (

    <div className="modal">

    <div className="modal-content">
       
        <span onClick={handleClose} className="close">&times;</span>
        <h1 className="modal-title">Nuevo Candidato</h1>
        <div className="modal-container">    
        <div className="a1">
            <label className='credentials'>Nombre y Apellidos</label>
            <input className='input-text' type='text' placeholder='Ej: Juan Perez Lorca'/>
        </div>
        <div className="b1">
            <label className='credentials'>Foto de perfil</label>
            <div className="upload">
                <button className="btn-upload">
                    Subir imagen
                    <i className="bi bi-cloud-arrow-up"></i>
                </button>
                <div className="info-upload">
                    <p>Archivos soportados:<span> .png, .jpg y .jpeg</span></p>
                    <p>Tamaño de archivo máximo:<span> 2 MB</span></p>
                </div>
            </div>
        </div>
        <div className="c1">
            <label className='credentials'>Documento CV</label>
            <div className="upload">
                <button className="btn-upload">
                    Subir documento PDF
                    <i className="bi bi-cloud-arrow-up"></i>
                </button>
                <div className="info-upload">
                    <p>Archivos soportados:<span> .pdf</span></p>
                    <p>Tamaño de archivo máximo:<span> 20 MB</span></p>
                </div>
            </div>
        </div>
        <div className="d1">

        <Tagcomponent></Tagcomponent>

        </div>
        <div className="f1">
            <label className='credentials'>Perfil Linkedin</label>
            <input className='input-text' type='text' placeholder='Enlace a Linkedin'/>
        </div>
        <div className="Datos container">
            <div className="a">
                <label className='credentials'>País</label>
                <select defaultValue="" className='input-text custom-select' >
                    <option value="" disabled>Elige una opcion</option>  
                    <option>España</option>
                </select>

            </div>
            <div className="b">
                <label className='credentials' >Ciudad</label>
                <select defaultValue="" className='input-text custom-select'>
                    <option value="" disabled>Elige una opcion</option>  
                    <option>Valencia</option>
                    <option>Sevilla</option>
                    <option>Gijón</option>
                    <option>Oviedo</option>
                </select>
            </div>
            <div className="c">
                <label className='credentials'>Nº Teléfono</label>
                <input className='input-text' type='text' placeholder='Ej: +34 612 34 56 78'/>
            </div>
            <div className="d">
                <label className='credentials'>Email</label>
                <input className='input-text' type='email' placeholder='Ej: user@mail.com'/>
            </div>
            <div className="e">
                <label className='credentials'>Presencialidad</label>
                <select defaultValue="" className='input-text custom-select'>
                    <option value="" disabled>Elige una opción</option>
                    <option value={LEVELS.FACETOFACE}>Presencial</option>
                    <option value={LEVELS.REMOTE}>En remoto</option>
                    <option value={LEVELS.BOTH}>Presencial y en remoto </option>
                </select>
            </div>
            <div className="f">
                <label className='credentials'>Traslado</label>
                <select defaultValue="" className='input-text custom-select'>
                    <option value="" disabled>Elige una opción</option>
                    <option>Si</option>
                    <option>No</option>
                </select>
            </div>

        </div>
        

    </div>
    <div className="modal-footer">
        <div className="modal-buttons">
            <div className="align-rigth">
            <button  type="submit" className="modal-btn modal-btn-disabled">Guardar</button>
            <button  onClick={handleClose} id="cancelar" className="modal-btn" >Cancelar</button>
        </div>
        </div>
        
    </div>
    </div>
    </div>
    );
}

export default ModalComponent;
