import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FilterComponent from '../components/filterComponent';
import HeaderComponent from '../components/headerComponent';
import MenuComponent from '../components/menuComponent';
import ModalComponent from '../components/modalComponent';
import TableComponent from '../components/tableComponent';
import { LEVELS } from '../models/faceToFace-enum';
import { Student } from '../models/student.class';
import '../styles/users.scss';
const Customerspage  = ()=> {
    
    //Students de prueba
    const student1 = new Student('Álvaro Sánchez Monteagudo','Valencia','España','+34 657 85 25 46','asangudo@gmail.com',['HTML&CSS','ANGULAR', 'REACT'], true ,false);
    const student2 = new Student('Carlos Yuste Guerrero','Oviedo','España','+34 697 82 95 65','yguerrero@gmail.com',['ANGULAR','REACT'], true,true);
    const student3 = new Student('Eustaquia Herrera Climent','Sevilla','España','+34 689 25 48 65','ecliment@gmail.com',['HTML&CSS','REACT'], false ,false);
    const [students, setStudents] = useState([student1 , student2, student3]);
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

    //Ordenar lista A-Z y Z-A
    const sort_lists = (key, inverse) =>
    inverse
    ? [...students].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
    : [...students].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))

    //Barra de Busqueda
    const studentSearchFilter = students.filter((student)=>{
    if(student.name.toLocaleLowerCase().includes(search.toLowerCase()) || student.mail.toLocaleLowerCase().includes(search.toLowerCase()) || student.city.toLocaleLowerCase().includes(search.toLowerCase())){
        return student;
    }
    });

    //Filtro de Busqueda
    const studentFilters = students.filter((student)=>{
        if(student.city.includes(city))
            return student;
        else if(student.faceToFace === faceToFace)
            return student;
        else if(student.transfer === transfer)
        return student;
        else if(student.tags.includes(tags[0]) || student.tags.includes(tags[1]) || student.tags.includes(tags[2]))
            return student;
    });
  
    return (
        <div className='usersPage'>
            <MenuComponent/>
            <HeaderComponent/>
            <div className='usersPanel'>
            
                <div className='students'>
                    <h2>Clientes</h2>
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
                                let newSortedList = sort_lists('mail')
                                if (newSortedList[0] === students[0]) newSortedList = sort_lists('mail', true)
                                setStudents(newSortedList)
                            }}>
                                Correo Electrónico 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>
                            <th className='tags' onClick={() => {
                                let newSortedList = sort_lists('tags')
                                if (newSortedList[0] === students[0]) newSortedList = sort_lists('tags', true)
                                setStudents(newSortedList)
                            }}>
                                Tecnologías 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {onFilter ? 
                    (studentFilters.map(student =>
                        <TableComponent key={student.name}
                            name={student.name}
                            city={student.city} 
                            country={student.country}
                            phonenumber={student.phonenumber}
                            mail={student.mail}
                            tags={student.tags}>
                        </TableComponent>  ) ) 
                        : 
                        (studentSearchFilter.map((student) =>
                        <TableComponent key={student.name}
                            name={student.name}
                            city={student.city} 
                            country={student.country}
                            phonenumber={student.phonenumber}
                            mail={student.mail}
                            tags={student.tags}>
                        </TableComponent>  
                    ))
                    }
                   
   
                    </tbody>
                </table>
                
                </div>
               
                </div>
                <FilterComponent
                    country={country}
                    setCountry={setCountry}
                    city={city}
                    setCity={setCity}
                    setOnFilter={setOnFilter}
                    tags = {tags}
                    setTags = {setTags}
                    setFaceToFace={setFaceToFace}
                    setTransfer={setTransfer}
                ></FilterComponent>    
                 
                <div>
                {isOpen ? <ModalComponent setIsOpen={setIsOpen} /> : null}
                </div>
                
               </div>
               
    );
}

export default Customerspage;
