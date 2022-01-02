import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FilterComponent from '../components/filterComponent';
import TableComponent from '../components/tableComponent';
import { LEVELS } from '../models/faceToFace-enum';
import { Student } from '../models/student.class';
import '../styles/users.scss';
const Userspage  = ()=> {
    
    //Students de prueba
    const student1 = new Student('Álvaro Sánchez Monteagudo','Valencia','España','+34 657 85 25 46','asangudo@gmail.com',['Html&CSS','Angular', 'React'], LEVELS.REMOTE,false);
    const student2 = new Student('Carlos Yuste Guerrero','Oviedo','España','+34 697 82 95 65','yguerrero@gmail.com',['Angular','React'], LEVELS.REMOTE,true);
    const student3 = new Student('Eustaquia Herrera Climent','Sevilla','España','+34 689 25 48 65','ecliment@gmail.com',['Html&CSS','React'], LEVELS.REMOTE,false);
    const [students, setStudents] = useState([student1 , student2, student3]);
    const [search, setSearch] = useState('');

    //Ordenar lista A-Z y Z-A
    const sort_lists = (key, inverse) =>
    inverse
    ? [...students].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
    : [...students].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))

    //Busqueda
    const studentFilter = students.filter((student)=>{
    if(student.name.toLocaleLowerCase().includes(search.toLowerCase()) || student.mail.toLocaleLowerCase().includes(search.toLowerCase()) || student.city.toLocaleLowerCase().includes(search.toLowerCase())){
        return student;
    }
    });


    return (
        <div className='usersPage'>
            <header className='usersHeader'>
                <div className='title-users'>
                <h1 className='title'>OpenBootcamp <span className='subtitle'>| Alumnos</span></h1>
                </div>
                <div className='username'>
                    <div className='user-icon'>
                        <h1>NA</h1>
                    </div>
                    <div className='name'><Link to="/student">UserName</Link>
                    </div>
                    <i className="bi bi-chevron-down dropDown"></i>
                </div>
            </header>

            <div className='usersPanel'>
            <button className='btn-add'><i className="bi bi-plus-lg"></i> Añadir alumnos</button>
                <div className='students'>
                    <h2>Alumnos</h2>
                    <div className='search-bar'>
                    <i className="bi bi-search search-icon"></i>
                    <input 
                    type='text' 
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}  
                    placeholder='Buscar por Nombre, Email o Palabra clave...'/>
                    </div>
                    
                </div>
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
                                Ciudad 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>
                            <th className='th-place'onClick={() => {
                                let newSortedList = sort_lists('country')
                                if (newSortedList[0] === students[0]) newSortedList = sort_lists('country', true)
                                setStudents(newSortedList)
                            }}>
                                País 
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
                                Etiquetas 
                                <i className="bi bi-arrow-down-up"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {studentFilter.map((student) =>
                        <TableComponent key={student.name}
                            name={student.name}
                            city={student.city} 
                            country={student.country}
                            phonenumber={student.phonenumber}
                            mail={student.mail}
                            tags={student.tags}>
                        </TableComponent>  
                    )}
                    </tbody>
                </table>
                </div>
                </div>
                    <FilterComponent/>     
               </div>
    );
}

export default Userspage;
