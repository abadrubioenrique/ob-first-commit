import React,{useState, useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import '../styles/users.scss';
import '../styles/student.scss';
import '../styles/select.scss';
import MenuComponent from '../components/menuComponent';
import HeaderComponent from '../components/headerComponent';
import StudentHeaderComponent from '../components/student/studentHeaderComponent';
import StudentBodyComponent from '../components/student/studentBodyComponent';
import { getCandidateById } from '../services/axios.CRUD.service';

const Studentpage = () => {
    const [loading, setLoading] = useState(true);
    const [candidate, setCandidate] = useState("");
    const [search,setSearch]=useState();
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

    //Obtención del token
    let token;
    if(authTokenRemember===null){
        token=authTokenSession;
      }else{
        token=authTokenRemember;
    }
   
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },200);
        getCandidateById(token,id,setCandidate);
    },[token,id])

    return (
    <div className='studentsPage'>
            <MenuComponent/>
            <HeaderComponent
            search={search}
            setSearch={setSearch}
            />
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
                loading={loading}
                token={token}
                id={id}
                name={name}
                city={city}
                country={country}
                remote={remote}
                transfer={transfer}
                status={status}
                phonenumber={phonenumber}
                mail={mail}
                linkedin={linkedin}
            ></StudentBodyComponent>
            </div>
        </div>
    </div>
    );
}

export default Studentpage;
