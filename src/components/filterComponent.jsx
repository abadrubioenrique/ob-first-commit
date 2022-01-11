import React,{useState} from 'react';
import '../styles/users.scss';
import '../styles/select.scss';
import Tagcomponent from './tagComponent';

const FilterComponent = () => {

    return (
      <div className='search-filter'>
        <h1>Filtros de búsqueda <i  className="bi bi-trash"></i></h1>
          <div className='campos'>
          <Tagcomponent
            options={['HTML&CSS','REACT', 'ANGULAR', 'VUEJS']}
            tagname = 'Tecnologías'
          ></Tagcomponent>
          
              <div className='tags-main'>
                  <i className="bi bi-chevron-down tags"></i>
                  <label className='credentials '>País</label>
                <select defaultValue=""  className='input-text custom-select'>
                  <option value="" disabled>Elija una opción</option>  
                  <option value="ESP">España</option>
                </select>
              </div>
              <div className='tags-main'>
                <i className="bi bi-chevron-down tags"></i>
                <label className='credentials '>Ciudad</label>
                <select defaultValue="" className='input-text custom-select'>
                  <option value="" disabled>Elija una opción</option>  
                  <option value="valencia">Valencia</option>
                  <option value="oviedo">Oviedo</option>
                  <option value="sevilla">Sevilla</option>
                </select>
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

      
      );
    }


export default FilterComponent;


