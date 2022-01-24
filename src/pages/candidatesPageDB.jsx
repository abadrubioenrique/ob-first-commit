import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FilterComponentCandidates from '../components/derivados/candidate/filterComponentCandidates';
import HeaderComponent from '../components/headerComponent';
import MenuComponent from '../components/menuComponent';
import ModalComponent from '../components/modalComponent';
import TableComponent from '../components/derivados/candidate/candidateTableComponent';
import { LEVELS } from '../models/faceToFace-enum';
import { Student } from '../models/student.class';
import '../styles/users.scss';
import { CANDIDATE_STATUS } from '../models/candidate-enum';
import axiosConfig from '../utils/config/axios.config';

//spinner
import '../styles/spinner.scss';

const CandidatespageDB = () => {
    //Students de prueba
    const student1 = new Student('Álvaro Sánchez Monteagudo','Valencia','España','+34 657 85 25 46','asangudo@gmail.com',['HTML&CSS','ANGULAR', 'REACT'], true ,false, CANDIDATE_STATUS.PRESELECIONADO);
    const student2 = new Student('Carlos Yuste Guerrero','Oviedo','España','+34 697 82 95 65','yguerrero@gmail.com',['ANGULAR','REACT'], true,true,CANDIDATE_STATUS.PDTE);
    const student3 = new Student('Eustaquia Herrera Climent','Sevilla','España','+34 689 25 48 65','ecliment@gmail.com',['HTML&CSS','REACT'], false ,false,CANDIDATE_STATUS.CONTRATADO);
    const [students, setStudents] = useState([student1 , student2, student3]);
    const [candidates, setCandidates] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },1000);
        getUserInfo();
    },[])
    const token = localStorage.getItem('TOKEN_KEY');
    const getUserInfo = () => {
        const headers = {
            "content-type": "application/json",
            Authorization: `Bearer ${JSON.parse(token).token}`,
        };
        return axiosConfig
            .get('api/candidatos', { headers })
            .then((response) => {
                if (response.data) {
                    localStorage.setItem('CANDIDATES', JSON.stringify(response.data.data.data));
                    setCandidates(response.data.data.data)
                }
    
                return response.data;
            });
    };

    if(loading===false){
        candidates.map(candidate=>{
            console.log(candidate.tecnologias.map(tecnologia=>{
                console.log(tecnologia.nombre)
            }))
        })
    }
    

    const [search, setSearch] = useState('');
    //Modal
    const [isOpen, setIsOpen] = useState(false);

     //Filtros
     const [onFilter, setOnFilter] = useState(false);
     const [country, setCountry] = useState();
     const [city, setCity] = useState();
     const [tags, setTags] = useState([]);
     //Presencial/ a distancia
     const [faceToFace, setFaceToFace] = useState();
     //Posibilidad traslado
     const [transfer, setTransfer] = useState();
    //Estado
    const [filterStatus, setFilterStatus] = useState();

    //Ordenar lista A-Z y Z-A
    const sort_lists = (key, inverse) =>
    inverse
    ? [...students].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
    : [...students].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))

    /* //Barra de Busqueda
    const studentSearchFilter = students.filter((student)=>{
        if(student.name.toLocaleLowerCase().includes(search.toLowerCase()) || student.mail.toLocaleLowerCase().includes(search.toLowerCase()) || student.city.toLocaleLowerCase().includes(search.toLowerCase())){
            return student;
        }
        }); */

/*     //Filtro de Busqueda
    const studentFilters = students.filter((student)=>{
        if(student.city.includes(city))
        return student;
        else if(student.faceToFace === faceToFace)
            return student;
        else if(student.transfer === transfer)
        return student;
        else if(student.tags.includes(tags[0]) || student.tags.includes(tags[1]) || student.tags.includes(tags[2]))
            return student;
        else if(student.status === filterStatus)
        return student;
    }); */
    return (
        <div className='usersPage'>
            <MenuComponent/>
            <HeaderComponent/>
            <div className='usersPanel'>
                <div className='students'>
                    <h2>Candidatos</h2>
                    <div className='search-bar'>
                    <i className="bi bi-search search-icon"></i>
                    <input 
                    type='text' 
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}  
                    placeholder='Buscar por Nombre, Email o Palabra clave...'/>
                    </div>
                    
                </div>
                <button onClick={() => setIsOpen(true)} className='btn-add'><i className="bi bi-plus-lg"></i> Añadir alumnos</button>
                <div className='table-responsive'>
                <table>
                    <thead>
                        <tr>
                            <th className='th-name' onClick={() => {
                                let newSortedList = sort_lists('name')
                                if (newSortedList[0] === students[0]) newSortedList = sort_lists('name', true)
                                setStudents(newSortedList)
                            }}>
                                Nombre 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>
                            <th className='th-place' onClick={() => {
                                let newSortedList = sort_lists('city')
                                if (newSortedList[0] === students[0]) newSortedList = sort_lists('city', true)
                                setStudents(newSortedList)
                            }}>
                                Ubicación 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>

                            <th className='phone'>Teléfono</th>
                            <th onClick={() => {
                                let newSortedList = sort_lists('tags')
                                if (newSortedList[0] === students[0]) newSortedList = sort_lists('tags', true)
                                setStudents(newSortedList)
                            }}>
                                Tecnologías 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>
                            <th className='end-table-status'>Estado</th>
                            <th className='end-table'></th>
                        </tr>
                    </thead>
                    <tbody>
                
                    {loading===false ?
                        
                        (candidates.map(candidate=>

                        <TableComponent key={candidate.id}
                            name={candidate.nombreCompleto}
                            city={candidate.ciudad}
                            country={candidate.pais}
                            phonenumber={candidate.telefono}
                            tags={candidate.tecnologias.map(tecnologia=>
                            (tecnologia.nombre))}
                            status={candidate.estado}
>                           
                            
                        </TableComponent>  ) ) 
                        :
                        <tr className="spinner"></tr>
                    }
                    
                    
                    
                    </tbody>
                </table>

                </div>
                
                </div>
                <FilterComponentCandidates
                    country={country}
                    setCountry={setCountry}
                    city={city}
                    setCity={setCity}
                    setOnFilter={setOnFilter}
                    tags = {tags}
                    setTags = {setTags}
                    setFaceToFace={setFaceToFace}
                    setTransfer={setTransfer}
                    setFilterStatus={setFilterStatus}

                ></FilterComponentCandidates>   
                <div>
                {isOpen ? <ModalComponent setIsOpen={setIsOpen} /> : null}
                </div>
                
               </div>
               
    );
}

export default CandidatespageDB;
