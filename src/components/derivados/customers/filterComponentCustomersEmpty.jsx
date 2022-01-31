import React from 'react';
import '../../../styles/users.scss';
import '../../../styles/select.scss';
import Tagcomponent from '../../tagComponent';

import { cities } from '../../../db/cities';
import { Checkbox } from '../../checkbox';


const FilterComponentCustomersEmpty = (props) => {
 
    return (
      <form>
      <div className='search-filter'>
        <h1>Filtros de búsqueda<button  className='clearfilter' type='reset'><i type="reset" className="bi bi-trash"></i></button></h1>
        
          <div className='campos'>
          
          <Tagcomponent
            options={[""]}
            tagname = 'Tecnologías'
            tags = {props.tags}
            setTags = {props.setTags}
            setOnFilter={props.setOnFilter}
            
          ></Tagcomponent>

              <div className='tags-main'>
                  <i className="bi bi-chevron-down tags"></i>
                  <label className='credentials '>País</label>
                <select defaultValue="" className='input-text custom-select'>
                <option disabled value="">Elija una opción</option>

                </select>
              </div>
              <div className='tags-main'>
                <i className="bi bi-chevron-down tags"></i>
                <label className='credentials '>Ciudad</label>
                <select defaultValue=""   className='input-text custom-select'>
                <option disabled value="">Elija una opción</option>
                {cities.map((option) => (
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
                </select>
              </div>

              <div className='tags-main'>
              <label className='credentials '>Presencial/ a distancia</label>
              <Checkbox
                label="Presencial"
               
              />
              <Checkbox
                label="En Remoto"
               
              />
              </div>
              <div className='tags-main'>
              <label className='credentials '>Posibilidad traslado</label>
              <Checkbox
                label="Si"
              
              />
              <Checkbox
                label="No"
              
              />
              </div>
              
      </div>
    </div>
</form>
      
      );
    }


export default FilterComponentCustomersEmpty;


