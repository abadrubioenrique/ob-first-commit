import React,{useState} from 'react';
import '../styles/users.scss';
import '../styles/select.scss';
import Tagcomponent from './tagComponent';

const FilterComponent = (props) => {
  
  //Checkbox
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  

  const handleChangeOne = () => {
    activateFilters();
    setCheckedOne(!checkedOne);
    setCheckedTwo(false);
    props.setFaceToFace(true);
  };

  const handleChangeTwo = () => {
    activateFilters();
    setCheckedTwo(!checkedTwo);
    setCheckedOne(false);
    props.setFaceToFace(false);
  };

  const handleChangeThree = () => {
    activateFilters();
    setCheckedThree(!checkedThree);
    setCheckedFour(false);
    props.setTransfer(true);

  };

  const handleChangeFour = () => {
    activateFilters();
    setCheckedFour(!checkedFour);
    setCheckedThree(false);
    props.setTransfer(false);
  };

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

  function clearFilters(){
    props.setOnFilter(false);
    setCheckedOne(false);
    setCheckedTwo(false);
    setCheckedThree(false);
    setCheckedFour(false);
    props.setFaceToFace();
    props.setTransfer();
    props.setTags("");
  }

  function activateFilters(){
    props.setOnFilter(true);
  }

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label className="remember-label">{label}
      <input type="checkbox" checked={value} onChange={onChange}/>
      <span className="checkmark"></span>
  </label>
    );
  };
    return (
      <form>
      <div className='search-filter'>
        <h1>Filtros de búsqueda<button onClick={clearFilters} className='clearfilter' type='reset'><i type="reset" className="bi bi-trash"></i></button></h1>
        
          <div className='campos'>
          
          <Tagcomponent
            options={['HTML&CSS','REACT', 'ANGULAR', 'VUEJS']}
            tagname = 'Tecnologías'
            tags = {props.tags}
            setTags = {props.setTags}
            setOnFilter={props.setOnFilter}
            
          ></Tagcomponent>

              <div className='tags-main'>
                  <i className="bi bi-chevron-down tags"></i>
                  <label className='credentials '>País</label>
                <select defaultValue="" onChange={e => props.setCountry(e.target.value)} className='input-text custom-select'>
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
              <Checkbox
                label="Presencial"
                value={checkedOne}
                onChange={handleChangeOne}
              />
              <Checkbox
                label="En Remoto"
                value={checkedTwo}
                onChange={handleChangeTwo}
              />
              </div>
              <div className='tags-main'>
              <label className='credentials '>Posibilidad traslado</label>
              <Checkbox
                label="Si"
                value={checkedThree}
                onChange={handleChangeThree}
              />
              <Checkbox
                label="No"
                value={checkedFour}
                onChange={handleChangeFour}
              />
              </div>
      </div>
    </div>
</form>
      
      );
    }


export default FilterComponent;


