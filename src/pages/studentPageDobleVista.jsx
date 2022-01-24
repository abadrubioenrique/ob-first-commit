import React,{useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LEVELS } from '../models/faceToFace-enum';
import {CANDIDATE_STATUS} from '../models/candidate-enum';
import '../styles/users.scss';
import '../styles/student.scss';
import '../styles/select.scss';
import Tagcomponent from '../components/tagComponent';
import MenuComponent from '../components/menuComponent';
import HeaderComponent from '../components/headerComponent';
import StudentHeaderComponent from '../components/student/studentHeaderComponent';
import StudentBodyComponent from '../components/derivados/student/studentBodyDoubleComponent';
import TabsFather from '../components/student-menu-tabs/tabsFather';

const StudentpageDouble = () => {
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
        <div className='rute'><Link to='/open-recruiter/candidates'><h1>Candidatos</h1></Link><i className="bi bi-chevron-left"></i><Link to="/student/info"><h1 className='active-route'>{name}</h1></Link></div>
        <div className="students-data-double">
        <div className='big'>
            <StudentHeaderComponent
                name={name}
                city={city}
                country={country}
                remote={remote}
                transfer={transfer}
                status={status}
            >
            </StudentHeaderComponent>
            <StudentBodyComponent
                setName={setName}
                setCountry={setCountry}
                setCity={setCity}
                setRemote={setRemote}
                setTransfer={setTransfer}
                setStatus={setStatus}
            ></StudentBodyComponent>
        </div>

        <div className='little'>

            <Outlet/>
        </div>
        </div>
        </div>
    </div>
    );
}

export default StudentpageDouble;
