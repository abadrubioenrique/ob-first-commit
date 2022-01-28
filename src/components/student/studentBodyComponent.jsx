import React,{useState, useEffect} from 'react';
import { cities } from '../../db/cities';
import { countries } from '../../db/countries';
import { putCandidate } from '../../services/axios.CRUD.service';

const StudentBodyComponent = (props) => {
    const [cambios,setCambios]=useState(false)
    const [datos, setDatos] = useState(
        {
            form: {
                name :'',
                country:'',
                city:'',
                phonenumber : '',
                mail : '',
                remote:'',
                transfer:'',
                linkedin:'',
                status:''
            }
        }
    );

    useEffect(() => {
        if(props.loading===false){
        setDatos( {
            form: {
                name :props.name,
                country:props.country,
                city:props.city,
                phonenumber : props.phonenumber,
                mail : props.mail,
                remote:props.remote,
                transfer:props.transfer,
                linkedin:props.linkedin,
                status:props.status
            }
        })
        if((props.transfer==null || props.remote==null || props.linkedin == null)){
            let transfer;
            let remote ;
            let linkedin;
            if(props.transfer==null){
                transfer = "";
            }else{
                transfer=props.transfer;
            }
            if(props.remote==null){
                remote = "";
            }else{
                remote=props.remote;
            }
            if(props.linkedin==null){
                linkedin = "";
            }else{
                linkedin=props.linkedin;
            }
           
            setDatos( {
                form: {
                    name :props.name,
                    country:props.country,
                    city:props.city,
                    phonenumber : props.phonenumber,
                    mail : props.mail,
                    remote:remote,
                    transfer:transfer,
                    linkedin:linkedin,
                    status:props.status
                }
            })
        }
    }
       
    }, [props.city, props.country, props.linkedin, props.loading, props.mail, props.name, props.phonenumber, props.remote, props.status, props.transfer]);

    const handleChange = e => {
        e.persist();
        setDatos({
            form: {
                ...datos.form,
                [e.target.name]: e.target.value
            }
        });
        setCambios(true);
        
    }
    const handleSubmit = e => {
        let name = datos.form.name;
        let country = datos.form.country;
        let city = datos.form.city;
        let phonenumber = datos.form.phonenumber;
        let mail = datos.form.mail;       
        let remote = datos.form.remote;
        let transfer = datos.form.transfer;
        let linkedin = datos.form.linkedin;
        let status = datos.form.status;
        putCandidate(props.token,props.id,name,country,city,phonenumber,mail,remote,transfer,linkedin,status).then(() => {
            window.location.reload();
        })

    }
    const { form } = datos;

    return (
        <div>
            <div className="a2">
                        <label className='credentials'>Nombre y Apellidos</label>
                        <input className='input-text' type='text' name="name" id="name" placeholder='Ej: Juan Perez Lorca' required onChange={handleChange} value={form ? form.name : ''}/>
                </div>
                <div className="data-container">
                    <div className="b2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                            <label className='credentials'>País</label>
                            <select className='input-text custom-select' name="country" id="country" required onChange={handleChange} value={form ? form.country : ''}>
                            <option value="" disabled>Elige una opción</option>  
                            {countries.map((option) => (
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
                            </select>
                </div>
                    <div className="c2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Ciudad</label>
                        <select className='input-text custom-select' name="city" id="city" required onChange={handleChange} value={form ? form.city : ''}>
                            <option value="" disabled>Elige una opción</option>
                            {cities.map((option) => (
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
                        </select>
                    </div>
                    <div className="d2">
                        <label className='credentials'>Nº Teléfono</label>
                        <input className='input-text' type='text' placeholder='Ej: 612 34 56 78' name="phonenumber" id="phonenumber" required onChange={handleChange} value={form ? form.phonenumber : ''}/>
                    </div>
                    <div className="e2">
                        <label className='credentials'>Email</label>
                        <input className='input-text' type='email' placeholder='Ej: user@mail.com' name="mail" id="mail" required onChange={handleChange} value={form ? form.mail : ''}/>
                    </div>
                    <div className="f2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Traslado</label>
                        <select className='input-text custom-select' name="transfer" id="transfer" onChange={handleChange} value={form ? form.transfer : ''}>
                            <option value="" disabled>Elige una opción</option>
                            <option value={true}>Si</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div className="g2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Presencialidad</label>
                        <select className='input-text custom-select' name="remote" id="remote" onChange={handleChange} value={form ? form.remote : ''}>
                        <option value="" disabled>Elige una opción</option>
                            <option value={false}>Presencial</option>
                            <option value={true}>En remoto</option>
                        </select>
                    </div>
                    <div className="h2">
                        <label className='credentials'>Enlace a Linkedin</label>
                        <input className='input-text' type='text' placeholder='Ej: https://linkedin.com/user_id'  name="linkedin" id="linkedin"  onChange={handleChange} value={form ? form.linkedin : ''}/>
                    </div>
                    <div className="i2">
                        <i className="bi bi-chevron-down dropdown-icon"></i>
                        <label className='credentials'>Estado Laboral</label>
                        <select className='input-text custom-select' name="status" id="status" onChange={handleChange} value={form ? form.status : ''}>
                        <option value="" disabled>Elige una opción</option>
                            <option value="contratado">Contratado</option>
                            <option value="en_proceso">Preselecionado</option>
                            <option value="libre">Pendiente de ofertas</option>
                        </select>
                    </div>
                </div>

                {cambios?
                ( <div className='cambios'>
                    <p>Se han detectado cambios</p>
                    <button onClick={handleSubmit} className='btn-upload'>Actualizar
                    <i className="bi bi-arrow-clockwise"></i>
                    </button>
                </div>)
                :
                    null
                }
           
        </div>
    );
}

export default StudentBodyComponent;
