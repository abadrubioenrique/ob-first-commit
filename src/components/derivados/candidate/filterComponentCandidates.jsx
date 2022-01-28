import React,{useState} from 'react';
import '../../../styles/users.scss';
import '../../../styles/select.scss';
import Tagcomponent from '../../tagComponent';
import { cities } from '../../../db/cities';
import { countries } from '../../../db/countries';
import { Checkbox } from '../../checkbox';


const FilterComponentCandidates = (props) => {
 
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
    setCheckedFaceToFace(true);
    setCheckedRemote(false);
    props.setFaceToFace(true);
  };

  const handleChangeTwo = () => {
    activateFilters();
    setCheckedRemote(true);
    setCheckedFaceToFace(false);
    props.setFaceToFace(false);
  };

  const handleChangeThree = () => {
    activateFilters();
    setCheckedWithTransfer(true);
    setCheckedWithoutTranfer(false);
    props.setTransfer(true);

  };

  const handleChangeFour = () => {
    activateFilters();
    setCheckedWithoutTranfer(true);
    setCheckedWithTransfer(false);
    props.setTransfer(false);
  };

  const handleChangeHired =()=>{
    activateFilters();
    setCheckedStatusHired(true);
    setCheckedPendingOffers(false);
    setCheckedShortlisted(false);
    props.setFilterStatus("contratado")
  }
  const handleChangePendingOffers =()=>{
    activateFilters();
    setCheckedStatusHired(false);
    setCheckedPendingOffers(true);
    setCheckedShortlisted(false);
    props.setFilterStatus("libre")
  }
  const handleChangeShortlisted =()=>{
    activateFilters();
    setCheckedStatusHired(false);
    setCheckedPendingOffers(false);
    setCheckedShortlisted(true);
    props.setFilterStatus("en_proceso");
  }

  function clearFilters(){
    props.setOnFilter(false);
    setCheckedFaceToFace(false);
    setCheckedRemote(false);
    setCheckedWithTransfer(false);
    setCheckedWithoutTranfer(false);
    setCheckedStatusHired(false);
    setCheckedPendingOffers(false);
    setCheckedShortlisted(false);
    props.setCountry();
    props.setCity();
    props.setFaceToFace();
    props.setTransfer();
    props.setFilterStatus();
    props.setTags("");
  }

  function activateFilters(){
    props.setOnFilter(true);

  }

    return (
      <form>
      <div className='search-filter'>
        <h1>Filtros de búsqueda<button onClick={clearFilters} className='clearfilter' type='reset'><i type="reset" className="bi bi-trash"></i></button></h1>
        
          <div className='campos'>
          
          <Tagcomponent
            options={props.options}
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
              <option key={option.value} value={option.value}>{option.value}</option>
            ))}
                </select>
              </div>
              <div className='tags-main'>
                <i className="bi bi-chevron-down tags"></i>
                <label className='credentials '>Ciudad</label>
                <select defaultValue=""  onClick={activateFilters} onChange={e => props.setCity(e.target.value)} className='input-text custom-select'>
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


export default FilterComponentCandidates;


