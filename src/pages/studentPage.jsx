import React,{useState, useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { LEVELS } from '../models/faceToFace-enum';
import {CANDIDATE_STATUS} from '../models/candidate-enum';
import '../styles/users.scss';
import '../styles/student.scss';
import '../styles/select.scss';
import Tagcomponent from '../components/tagComponent';
import MenuComponent from '../components/menuComponent';
import HeaderComponent from '../components/headerComponent';
import StudentHeaderComponent from '../components/student/studentHeaderComponent';
import StudentBodyComponent from '../components/student/studentBodyComponent';
import { getCandidateById } from '../services/axios.CRUD.service';

const Studentpage = (props) => {
    const [loading, setLoading] = useState(true);
    const [candidate, setCandidate] = useState("");

  
    /* const [name, setName] = useState("Nombre Completo");
    const [city, setCity] = useState('Ciudad');
    const [country, setCountry] = useState('País');
    const [remote, setRemote] = useState('Presencialidad');
    const [transfer, setTransfer] = useState('Traslado');
    const [status, setStatus] = useState('No definido'); */

    useEffect(() => {

        setTimeout(()=>{
            setLoading(false);

        },200);

        getCandidateById(token,id,setCandidate);


    },[])
    const {id} = useParams();

    const authTokenRemember = localStorage.getItem('TOKEN_KEY');
    const authTokenSession = sessionStorage.getItem('TOKEN_KEY');

    let name=candidate.nombreCompleto; 
    let city = candidate.ciudad;
    let country = candidate.pais;
    let remote = candidate.remoto;
    let transfer = candidate.disponibilidadTraslado;
    let status = candidate.estado;
    let phonenumber = candidate.telefono;
    let mail = candidate.email;
    let linkedin = candidate.enlaceLinkedin;

    let nameChange;
    let cityChange; 
    let countryChange;
    let remoteChange;
    let transferChange;
    let statusChange;


    //Obtención del token
    let token;
    if(authTokenRemember===null){
        token=authTokenSession;
      }else{
        token=authTokenRemember;
    }
   

    return (
    <div className='studentsPage'>
            <MenuComponent/>
            <HeaderComponent/>
        <div className="usersPanel">
        <div className='rute'><Link to='/open-recruiter/candidates'><h1>Candidatos</h1></Link><i className="bi bi-chevron-left"></i><Link to="/student/info"><h1 className='active-route'>{name}</h1></Link></div>
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
                <div className='student-menu-element'><Link to={`/open-recruiter/candidates/${id}/abilities`}><h1>Habilidades</h1></Link></div>
                <div className='student-menu-element'><Link to={`/open-recruiter/candidates/${id}/curriculum`}><h1>Currículum Vitae</h1></Link></div>
                <div className='student-menu-element'><Link to={`/open-recruiter/candidates/${id}/processes`}><h1>Procesos</h1></Link></div>
            </div>
            <StudentBodyComponent
                name={name}
                city={city}
                country={country}
                remote={remote}
                transfer={transfer}
                status={status}
                phonenumber={phonenumber}
                mail={mail}
                linkedin={linkedin}
                setName={nameChange}
                setCountry={countryChange}
                setCity={cityChange}
                setRemote={remoteChange}
                setTransfer={transferChange}
                setStatus={statusChange}
            ></StudentBodyComponent>
            </div>
        </div>
    </div>
    );
}

export default Studentpage;
