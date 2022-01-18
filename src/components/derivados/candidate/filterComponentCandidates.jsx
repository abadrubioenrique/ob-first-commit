import React,{useState} from 'react';
import '../../../styles/users.scss';
import '../../../styles/select.scss';
import Tagcomponent from '../../tagComponent';
import { CANDIDATE_STATUS } from '../../../models/candidate-enum';


const FilterComponent = (props) => {
 
  //Checkbox
  const [checkedFaceToFace, setCheckedFaceToFace] = useState(false);
  const [checkedRemote, setCheckedRemote] = useState(false);

  const [checkedWithTransfer, setCheckedWithTransfer] = useState(false);
  const [checkedWithoutTranfer, setCheckedWithoutTranfer] = useState(false);

  const [checkedStatusHired, setCheckedStatusHired]= useState(false);
  const [checkedPendingOffers, setCheckedPendingOffers]= useState(false);
  const [checkedShortlisted, setCheckedShortlisted]= useState(false);

  const handleChangeOne = () => {
    activateFilters();
    setCheckedFaceToFace(!checkedFaceToFace);
    setCheckedRemote(false);
    props.setFaceToFace(true);
  };

  const handleChangeTwo = () => {
    activateFilters();
    setCheckedRemote(!checkedRemote);
    setCheckedFaceToFace(false);
    props.setFaceToFace(false);
  };

  const handleChangeThree = () => {
    activateFilters();
    setCheckedWithTransfer(!checkedWithTransfer);
    setCheckedWithoutTranfer(false);
    props.setTransfer(true);

  };

  const handleChangeFour = () => {
    activateFilters();
    setCheckedWithoutTranfer(!checkedWithoutTranfer);
    setCheckedWithTransfer(false);
    props.setTransfer(false);
  };

  const handleChangeHired =()=>{
    activateFilters();
    setCheckedStatusHired(true);
    setCheckedPendingOffers(false);
    setCheckedShortlisted(false);
    props.setFilterStatus(CANDIDATE_STATUS.CONTRATADO)
  }
  const handleChangePendingOffers =()=>{
    activateFilters();
    setCheckedStatusHired(false);
    setCheckedPendingOffers(true);
    setCheckedShortlisted(false);
    props.setFilterStatus(CANDIDATE_STATUS.PDTE)
  }
  const handleChangeShortlisted =()=>{
    activateFilters();
    setCheckedStatusHired(false);
    setCheckedPendingOffers(false);
    setCheckedShortlisted(true);
    props.setFilterStatus(CANDIDATE_STATUS.PRESELECIONADO);
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

  function clearFilters(){
    props.setOnFilter(false);
    setCheckedFaceToFace(false);
    setCheckedRemote(false);
    setCheckedWithTransfer(false);
    setCheckedWithoutTranfer(false);
    setCheckedStatusHired(false);
    setCheckedPendingOffers(false);
    setCheckedShortlisted(false);
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
                value={checkedFaceToFace}
                onChange={handleChangeOne}
              />
              <Checkbox
                label="En Remoto"
                value={checkedRemote}
                onChange={handleChangeTwo}
              />
              </div>
              <div className='tags-main'>
              <label className='credentials '>Posibilidad traslado</label>
              <Checkbox
                label="Si"
                value={checkedWithTransfer}
                onChange={handleChangeThree}
              />
              <Checkbox
                label="No"
                value={checkedWithoutTranfer}
                onChange={handleChangeFour}
              />
              </div>
              <div className='tags-main'>
              <label className='credentials '>Estado</label>
              <Checkbox
                label="Contratado"
                value={checkedStatusHired}
                onChange={handleChangeHired}
              />
              <Checkbox
                label="Pendiente de Ofertas"
                value={checkedPendingOffers}
                onChange={handleChangePendingOffers}
              />
              <Checkbox
                label="Preselecionado"
                value={checkedShortlisted}
                onChange={handleChangeShortlisted}
              />
             
              </div>
      </div>
    </div>
</form>
      
      );
    }


export default FilterComponent;


