import React,{useState} from 'react';
import '../styles/users.scss';
import '../styles/select.scss';
import Tagcomponent from './tagComponent';

const FilterComponent = (props) => {

  function clearFilters(){
    props.setCountry("");
    props.setCity("");
    props.setOnFilter(false);
  }

  function activateFilters(){
    props.setOnFilter(true);
  }

  const countries = [
    {
      label: "España",
      value: "España",
    }
  ];

  const cities = [
    {
      label: "Valencia",
      value: "Valencia",
    },
    {
      label: "Oviedo",
      value: "Oviedo",
    },
    {
      label: "Sevilla",
      value: "Sevilla",
    },
  ];

    return (
      <form>
      <div className='search-filter'>
        <h1>Filtros de búsqueda<button className='clearfilter' type='reset'><i type="reset" onClick={clearFilters} className="bi bi-trash"></i></button></h1>
        
          <div className='campos'>
          <Tagcomponent
            options={['HTML&CSS','REACT', 'ANGULAR', 'VUEJS']}
            tagname = 'Tecnologías'
          ></Tagcomponent>

              <div className='tags-main'>
                  <i className="bi bi-chevron-down tags"></i>
                  <label className='credentials '>País</label>
                <select defaultValue="" onClick={activateFilters} onChange={e => props.setCountry(e.target.value)} className='input-text custom-select'>
                <option disabled value="">Elija una opción</option>
                {countries.map((option) => (
              <option key={option.label} value={option.value}>{option.label}</option>
            ))}
                </select>
              </div>
              <div className='tags-main'>
                <i className="bi bi-chevron-down tags"></i>
                <label className='credentials '>Ciudad</label>
                <select defaultValue=""  onClick={activateFilters} onChange={e => props.setCity(e.target.value)} className='input-text custom-select'>
                <option disabled value="">Elija una opción</option>
                {cities.map((option) => (
              <option key={option.label} value={option.value}>{option.label}</option>
            ))}
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
                  <input value="Si" type="checkbox"/>
                  <span className="checkmark"></span>
              </label>
              <label className="remember-label">No
                  <input value="No" type="checkbox"/>
                  <span className="checkmark"></span>
              </label>
              </div>
      </div>
    </div>
</form>
      
      );
    }


export default FilterComponent;


