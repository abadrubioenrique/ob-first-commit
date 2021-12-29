import { useState } from 'react';
import { LEVELS } from '../models/faceToFace-enum';
import { Student } from '../models/student.class';
import '../styles/users.scss';
const Userspage = () => {
    
    //Students de prueba
    const student1 = new Student('Álvaro Sánchez Monteagudo','Valencia','España','+34 657 85 25 46','asangudo@gmail.com',['Html&CSS','Angular', 'React'], LEVELS.REMOTE,false);
    const student2 = new Student('Carlos Yuste Guerrero','Oviedo','España','+34 697 82 95 65','yguerrero@gmail.com',['Angular','React'], LEVELS.REMOTE,true);
    const student3 = new Student('Eustaquia Herrera Climent','Sevilla','España','+34 689 25 48 65','ecliment@gmail.com',['Html&CSS','React'], LEVELS.REMOTE,false);
    
    const [students, setStudents] = useState([student1 , student2, student3]);

    function ListItem(props) {
        // Correct! There is no need to specify the key here:
        return (
        <tr>
        <td>{props.name}</td>
        <td>{props.city}</td>
        <td>{props.country}</td>
        <td>{props.phonenumber}</td>
        <td>{props.mail}</td>++
        <td><span className='table-tag'>{props.tags[0]}</span><span className='table-tag'>{props.tags[1]}</span>
        
            {(props.tags.length>2) 
            ?  
            (<span className='table-tag'>+{props.tags.length-2}</span>) 
            : 
            null }
        
        </td>
        </tr>
            );
      }

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
                    <div className='name'>UserName
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
                    <input type='text' placeholder='Buscar por Nombre, Email o Palabra clave...'/>


                    </div>
                    
                </div>
                <div className='table-responsive'>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre <i className="bi bi-arrow-down-up"></i></th>
                            <th>Ciudad <i className="bi bi-arrow-down-up"></i></th>
                            <th>País <i className="bi bi-arrow-down-up"></i></th>
                            <th>Teléfono <i className="bi bi-arrow-down-up"></i></th>
                            <th>Correo electrónico <i className="bi bi-arrow-down-up"></i></th>
                            <th className='tags'>Etiquetas <i className="bi bi-arrow-down-up"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                    {students.map((number) =>
                    <ListItem key={number.name}
                            name={number.name}
                            city={number.city} 
                            country={number.country}
                            phonenumber={number.phonenumber}
                            mail={number.mail}
                            tags={number.tags}
                            />
                
                        
                    )}
                    
                    </tbody>
                </table>



                </div>
                </div>
               
            <div className='search-filter'>
                <h1>Filtros de búsqueda <i className="bi bi-trash"></i></h1>
                <div className='campos'>
                
                <div className='tags-main'>
                    <i className="bi bi-chevron-down tags"></i>
                    <label className='credentials '>Etiquetas</label>
                    <input className='input-text' type='text' placeholder='Escribe para buscar...'/>
                </div>
                <div className='tags-main'>
                    <i className="bi bi-chevron-down tags"></i>
                    <label className='credentials '>Pais</label>
                    <input className='input-text' type='text' placeholder='Escribe para buscar...'/>
                </div>
                <div className='tags-main'>
                    <i className="bi bi-chevron-down tags"></i>
                    <label className='credentials '>Ciudad</label>
                    <input className='input-text' type='text' placeholder='Escribe para buscar...'/>
                </div>
                <div className='tags-main'>
                <label className='credentials '>Presencial/ a distancia</label>
                <label className="remember-label">Presencial
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                <label className="remember-label">En Remoto
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                </div>
                <div className='tags-main'>
                <label className='credentials '>Posibilidad traslado</label>
                <label className="remember-label">Si
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                <label className="remember-label">No
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                </div>
                </div>
            </div>


        </div>
    );
}

export default Userspage;
