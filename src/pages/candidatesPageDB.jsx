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
    const [candidates, setCandidates] = useState("");
    const [candidatesFilter, setCandidatesFilter] = useState();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },1000);
        getUserInfo();
    },[])
    const authTokenRemember = localStorage.getItem('TOKEN_KEY');
    const authTokenSession = sessionStorage.getItem('TOKEN_KEY');

    //Obtención del token
    let token;
    if(authTokenRemember===null){
        token=authTokenSession;
      }else{
        token=authTokenRemember;
    }

    const getUserInfo = () => {
        const headers = {
            "content-type": "application/json",
            Authorization: `Bearer ${JSON.parse(token).token}`,
        };
        return axiosConfig
            .get('api/candidatos', { headers })
            .then((response) => {
                if (response.data) {
                    //localStorage.setItem('CANDIDATES', JSON.stringify(response.data.data.data));
                    setCandidates(response.data.data.data);
                    setCandidatesFilter(candidates);
                }
    
                return response.data;
            });
    };
      
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
    ? [...candidates].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
    : [...candidates].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))


    var candidatesConverted = Object.keys(candidates).map(function(candidate) {
        return candidates[candidate];
      });


    //Barra de Busqueda
    const candidatesSearchFilter = candidatesConverted.filter((candidate)=>{
        if(candidate.nombreCompleto.toLocaleLowerCase().includes(search.toLowerCase()) || candidate.email.toLocaleLowerCase().includes(search.toLowerCase()) || candidate.ciudad.toLocaleLowerCase().includes(search.toLowerCase())){
            return candidate;
        }
        });

    //Filtro de Busqueda
    const studentFilters = candidatesConverted.filter((candidate)=>{
        if(candidate.ciudad.includes(city))
        return candidate;
        else if(candidate.remoto === faceToFace)
            return candidate;
        else if(candidate.disponibilidadTraslado === transfer)
        return candidate;
        else if(candidate.estado === filterStatus)
        return candidate;
    });
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
                                let newSortedList = sort_lists('nombreCompleto')
                                if (newSortedList[0] === candidates[0]) newSortedList = sort_lists('nombreCompleto', true)
                                setCandidates(newSortedList)
                            }}>
                                Nombre 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>
                            <th className='th-place' onClick={() => {
                                let newSortedList = sort_lists('ciudad')
                                if (newSortedList[0] === candidates[0]) newSortedList = sort_lists('ciudad', true)
                                setCandidates(newSortedList)
                            }}>
                                Ubicación 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>

                            <th className='phone'>Teléfono</th>
                            <th onClick={() => {
                                let newSortedList = sort_lists('tecnologias')
                                if (newSortedList[0] === candidates[0]) newSortedList = sort_lists('tecnologias', true)
                                setCandidates(newSortedList)
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
                        (onFilter ?
                            (studentFilters.map(candidate=>

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
                            (candidatesSearchFilter.map(candidate=>

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
                        )

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
