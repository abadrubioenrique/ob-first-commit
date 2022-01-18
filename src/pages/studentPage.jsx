import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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

const Studentpage = () => {
    const [name, setName] = useState('Nombre Alumno');
    const [city, setCity] = useState('Ciudad');
    const [country, setCountry] = useState('País');
    const [remote, setRemote] = useState('Presencialidad');
    const [transfer, setTransfer] = useState('Traslado');
    const [status, setStatus] = useState('No definido');



    return (
    <div className='studentsPage'>
            <MenuComponent/>
            <HeaderComponent/>
        <div className="usersPanel">
        <div className='rute'><Link to='/candidates'><h1>Candidatos</h1></Link><i className="bi bi-chevron-left"></i><Link to="/student/info"><h1 className='active-route'>{name}</h1></Link></div>
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
                <div className='student-menu-element'><Link to="/student/abilities"><h1>Habilidades</h1></Link></div>
                <div className='student-menu-element'><Link to="/student/curriculum"><h1>Currículum Vitae</h1></Link></div>
                <div className='student-menu-element'><Link to="/student/proccess"><h1>Procesos</h1></Link></div>
            </div>
            <StudentBodyComponent
                setName={setName}
                setCountry={setCountry}
                setCity={setCity}
                setRemote={setRemote}
                setTransfer={setTransfer}
                setStatus={setStatus}
            ></StudentBodyComponent>
            </div>
        </div>
    </div>
    );
}

export default Studentpage;
