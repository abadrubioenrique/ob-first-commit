import { useState, useEffect } from 'react';
import FilterComponentCandidates from '../components/derivados/candidate/filterComponentCandidates';
import HeaderComponent from '../components/headerComponent';
import MenuComponent from '../components/menuComponent';
import ModalComponent from '../components/modalComponent';
import TableComponent from '../components/derivados/candidate/candidateTableComponent';
import '../styles/users.scss';

//spinner
import '../styles/spinner.scss';
import FilterComponentCandidatesEmpty from '../components/derivados/candidate/filterComponentCandidatesEmpty';

//Services
import {getTecnologias,getCandidatesInfo, getTecnologiasPure} from '../services/axios.CRUD.service'
import { levels } from '../models/niveles';
import { Tecnologia } from '../models/tecnologia.class';


const CandidatespageDB = () => {
    const [candidates, setCandidates] = useState("");
    
    const [tecnologiasOptions, setTecnologiasOptions] = useState(['']);
    const [page,setPage] = useState(1)
    const [totalCandidates,setTotalCandidates]=useState(0)
    const [loading, setLoading] = useState(true);
    
    const authTokenRemember = localStorage.getItem('TOKEN_KEY');
    const authTokenSession = sessionStorage.getItem('TOKEN_KEY');
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
        },500);
        getTecnologias(token, setTecnologiasOptions)
    },[token])
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },500);
        getCandidatesInfo(token, setCandidates, setTotalCandidates,page);
    },[page, token])

    
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
        else if(
            (candidate.tecnologias.map(tecnologia=>(tecnologia.nombre)).includes(tags[0]))
            ||
            (candidate.tecnologias.map(tecnologia=>(tecnologia.nombre)).includes(tags[1]))
            ||
            (candidate.tecnologias.map(tecnologia=>(tecnologia.nombre)).includes(tags[2]))
            )
        return candidate;
        else if(candidate.estado === filterStatus)
        return candidate;
    });

    //Tecnologias Modal
    //Options
    const [tecnologiasPure,setTecnologiasPure]= useState(['']);
    const [tecnologiasData,setTecnologiasData] = useState(['']);
    //Suboptions
    const tec1=[new levels(1,'INIC.')]
    const tec2=[new levels(2,'INTER.')]
    const tec3=[new levels (3,'AVAN.')]
    const tecSubOptions=[tec1,tec2,tec3];
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },700);

        getTecnologiasPure(token, setTecnologiasPure);
        
  
      },[loading, token])

    useEffect(() => {
    if((tecnologiasPure!==[''])){
        setTecnologiasData(tecnologiasPure.map(tecnologia=>
        new Tecnologia(tecnologia.id,tecnologia.nombre)
        ))
        
    }

    }, [tecnologiasPure]);
    function previusPage(){
        if(page!==1){
            setPage(page-1);
        }
    }
    function nextPage(){
            setPage(page+1);
    }
    return (
        <div className='usersPage'>
            <MenuComponent/>
            <HeaderComponent
            search={search}
            setSearch={setSearch}
            />
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

                            <TableComponent key={candidate.telefono}
                                id={candidate.id}
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
                            id={candidate.id}
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
                
                {(onFilter===false ?
                (page===1
                ?
                (
                    <div className='pages'>
                        <p>{page}</p>
                        <div className='nextPage'>
                        <button className='btn-page' onClick={nextPage}><i className="bi bi-arrow-right"></i></button>                      
                        </div>
                    </div>
               )
                :

                (totalCandidates>(page*10)
                ?
                (
                    <div className='pages'>
                        <p>{page}</p>
                        <div className='nextPage'>
                        <button className='btn-page' onClick={nextPage}><i className="bi bi-arrow-right"></i></button>                      
                        </div>
                        <div className='previusPage'>
                            <button className='btn-page' onClick={previusPage}><i className="bi bi-arrow-left"></i></button>
                        </div>
                    </div>
                )
                :

                (
                    <div className='pages'>
                        <p>{page}</p>
                        <div className='previusPage'>
                            <button className='btn-page' onClick={previusPage}><i className="bi bi-arrow-left"></i></button>
                        </div>
                    </div>
                )
                )
                )
                :
                    null
                )
                }
                
                
                </div>
                {loading===false ?
                (<FilterComponentCandidates
                    options={tecnologiasOptions}
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
                ></FilterComponentCandidates>)
                :  
                (<FilterComponentCandidatesEmpty
                    country={country}
                    city={city}
                    tags = {tags}
                    setTags = {setTags}
                ></FilterComponentCandidatesEmpty>)
                }
                <div>
                {isOpen ? <ModalComponent 
                    modal="candidato"
                    setIsOpen={setIsOpen}
                    tecnologiasData={tecnologiasData}
                    tecSubOptions={tecSubOptions}

                 /> : null}
                </div>
                
               </div>
               
    );
}

export default CandidatespageDB;
