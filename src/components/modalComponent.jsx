import React, {useState, useEffect} from 'react';
import { LEVELS } from '../models/faceToFace-enum';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/select.scss'
import '../styles/modal.scss';
import Tagcomponent from './tagComponent';
import { postCandidate, putCandidate } from '../services/axios.CRUD.service';
import { countries } from '../db/countries';
import { cities } from '../db/cities';
const ModalComponent = (props) => {
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const [onFilter, setOnFilter] = useState(false);
    const [datos, setDatos] = useState(
        {
            form: {
                name : '',
                country:'',
                city:'',
                phonenumber : '',
                mail : '',
                remote:'',
                transfer:'',
                linkedin:''
            }
        }
    );

    const authTokenRemember = localStorage.getItem('TOKEN_KEY');
    const authTokenSession = sessionStorage.getItem('TOKEN_KEY');
    //Obtención del token
    let token;
    if(authTokenRemember===null){
        token=authTokenSession;
      }else{
        token=authTokenRemember;
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
        let name = datos.form.name;
        let country = datos.form.country;
        let city = datos.form.city;
        let phonenumber = datos.form.phonenumber;
        let mail = datos.form.mail;       
        let remote = datos.form.remote;
        let transfer = datos.form.transfer;
        let linkedin = datos.form.linkedin;

        postCandidate(token,name,country,city,phonenumber,mail,remote,transfer,linkedin).then(() => {
            window.location.reload();
        })  
        
/*        putCandidate(token,id,name,country,city,phonenumber,mail,remote,transfer,linkedin).then(() => {
            window.location.reload();
        }) */
        
    }
        
    

    const { form } = datos;
    return (

    <div className="modal">

    <div className="modal-content">
       
        <span onClick={() => props.setIsOpen(false)} className="close">&times;</span>
        <form onSubmit={handleSubmit}>
        <h1 className="modal-title">{"Nuevo " + props.modal}</h1>
        <div className="modal-container">    
        <div className="a1">
            <label className='credentials'>Nombre y Apellidos</label>
            <input className='input-text' type='text' name="name" id="name" placeholder='Ej: Juan Perez Lorca' required onChange={handleChange} value={form ? form.name : ''}/>
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

        <Tagcomponent
            options={['HTML&CSS','REACT', 'ANGULAR', 'VUEJS']}
            tagname = 'Tecnologías'
            tags = {tags}
            setTags = {setTags}
            setOnFilter={setOnFilter}
          ></Tagcomponent>

        </div>
        <div className="f1">
            <label className='credentials'>Perfil Linkedin</label>
            <input className='input-text' type='text' placeholder='Enlace a Linkedin'  name="linkedin" id="linkedin"  onChange={handleChange} value={form ? form.linkedin : ''}/>
        </div>
        <div className="Datos container">
            <div className="a">
                <label className='credentials'>País</label>
                <select className='input-text custom-select' name="country" id="country" required onChange={handleChange} value={form ? form.country : ''}>
                    <option value="" disabled>Elige una opcion</option>  
                    {countries.map((option) => (
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
                </select>

            </div>
            <div className="b">
                <label className='credentials' >Ciudad</label>
                <select className='input-text custom-select' name="city" id="city" required onChange={handleChange} value={form ? form.city : ''}>
                    <option value="" disabled>Elige una opcion</option>  
                    {cities.map((option) => (
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
                </select>
            </div>
            <div className="c">
                <label className='credentials'>Nº Teléfono</label>
                <input className='input-text' type='text' placeholder='Ej: +34 612 34 56 78' name="phonenumber" id="phonenumber" required onChange={handleChange} value={form ? form.phonenumber : ''}/>
            </div>
            <div className="d">
                <label className='credentials'>Email</label>
                <input className='input-text' type='email' placeholder='Ej: user@mail.com' name="mail" id="mail" required onChange={handleChange} value={form ? form.mail : ''}/>
            </div>
            <div className="e">
                <label className='credentials'>Presencialidad</label>
                <select className='input-text custom-select' name="remote" id="remote" onChange={handleChange} value={form ? form.remote : ''}>
                    <option value="" disabled>Elige una opción</option>
                    <option value={false}>Presencial</option>
                    <option value={true}>En remoto</option>
                </select>
            </div>
            <div className="f">
                <label className='credentials'>Traslado</label>
                <select className='input-text custom-select' name="transfer" id="transfer" onChange={handleChange} value={form ? form.transfer : ''}>
                    <option value="" disabled>Elige una opción</option>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                </select>
            </div>

        </div>
        

    </div>
    <div className="modal-footer">
        <div className="modal-buttons">
            <div className="align-rigth">
            <button type="submit" className="modal-btn submit">Guardar</button>
            <button onClick={() => props.setIsOpen(false)} className="modal-btn cancel" >Cancelar</button>
        </div>
        </div>
        
    </div>
    </form>
    </div>
    
    </div>
    );
}

export default ModalComponent;
