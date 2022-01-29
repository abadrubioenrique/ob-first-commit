import React, { useState,useEffect } from "react";
import { Link, useParams  } from "react-router-dom";
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";
import '../../styles/tabsmenu.scss'
import ThirdTab from "./thirdTab";
import { PROCESS_STATUS } from "../../models/process-enum";
import {Process} from '../../models/process.class';
import { getCandidateById, getIdiomas, getTecnologias } from "../../services/axios.CRUD.service";

const TabsFather = (props) => {
  const process1 = new Process("Título Oferta 1","Empresa SA", 7, new Date('11-5-2022'),PROCESS_STATUS.CONTRATADO)
  const process2 = new Process("Título Oferta 2","Empresa SA", 5, new Date('8 nov 2022'),PROCESS_STATUS.PDTE_ENTREVISTA)
  const process3 = new Process("Título Oferta 3","Empresa SA", 3, new Date('10 nov 2022'),PROCESS_STATUS.ENTREVISTADO)
  const process4 = new Process("Título Oferta 4","Empresa SA", 1, new Date('15 nov 2022'),PROCESS_STATUS.ESPERANDO_CV)
  const process5 = new Process("Título Oferta 5","Empresa SA", 2, new Date('18 nov 2022'),PROCESS_STATUS.RECHAZADO)
  const [processes, setProcesses] = useState([process1 , process2, process3, process4, process5]);


  const [tecnologiasOptions, setTecnologiasOptions] = useState(['']);
  const [tecnologiasID,setTecnologiasID] = useState(['']);
  const [languagesOptions, setLanguagesOptions] = useState(['']);
  const [languagesID,setLanguagesID] = useState(['']);
  const [candidate, setCandidate] = useState("");
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  let processesNum = processes.length;

  const [tags, setTags] = useState("");
  const [tecFromDB, setTecFromDB]= useState("")
  const [languages, setLanguages] = useState("");
  const [langFromDB, setLangFromDB]=useState("")

  //Suboptions
  const tecSubOptions=['INIC.','INTER.','AVAN.'];
  const languageSubOptions=['BÁSICO','INTER.','AVAN.','NATIVO'];
  
  //Cambios en las etiquetas
  const [cambios,setCambios] = useState(false)
  
  //Obtención del token
  const authTokenRemember = localStorage.getItem('TOKEN_KEY');
  const authTokenSession = sessionStorage.getItem('TOKEN_KEY');
  let token;
  if(authTokenRemember===null){
      token=authTokenSession;
    }else{
      token=authTokenRemember;
  }
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },600);
        getCandidateById(token,id,setCandidate);
        getTecnologias(token, setTecnologiasOptions,setTecnologiasID)
        getIdiomas(token, setLanguagesOptions, setLanguagesID)
        if((candidate!=="") && (loading===false)){
          //Tecnologías
            setTags(candidate.tecnologias.map(tecnologia=>
              (tecnologia.nombre +" "+ (tecSubOptions[tecnologia.meta.pivot_nivel-1]))));
            setTecFromDB(candidate.tecnologias.map(tecnologia=>
              (tecnologia.nombre +" "+ (tecSubOptions[tecnologia.meta.pivot_nivel-1]))));
          //Idiomas
            setLanguages(candidate.idiomas.map(idioma=>
              (idioma.nombre +" "+ (tecSubOptions[idioma.meta.pivot_nivel-1]))));
            setLangFromDB(candidate.idiomas.map(idioma=>
              (idioma.nombre +" "+ (tecSubOptions[idioma.meta.pivot_nivel-1]))));
        }
        
    },[loading])
    useEffect(() => {
      if((JSON.stringify(tags) !== JSON.stringify(tecFromDB))
      ||(JSON.stringify(languages) !== JSON.stringify(langFromDB))){
        setCambios(true)
      }
    }, [tags,languages]);
  
  const handleTab1 = () => {
    props.setActiveTab("tab1");
  };

  const handleTab2 = () => {
    props.setActiveTab("tab2");
  };
  const handleTab3 = () => {
    props.setActiveTab("tab3");
  };


    return (
    <div className="tabs">
        <ul className="nav-tabs">
        <Link to={`/open-recruiter/candidates/${id}/abilities`}><li 
            className={props.activeTab === "tab1" ? "tab-active" : ""}
            onClick={handleTab1}
        >
            <h2>Habilidades</h2>
        </li></Link>

        <Link to={`/open-recruiter/candidates/${id}/curriculum`}><li
            className={props.activeTab === "tab2" ? "tab-active" : ""}
            onClick={handleTab2}
        >
             
            <h2>Currículum Vitae</h2>
        </li></Link>
        <Link to={`/open-recruiter/candidates/${id}/processes`}><li
            className={props.activeTab === "tab3" ? "tab-active" : ""}
            onClick={handleTab3}
        >
        <h2>Procesos<span className="num-processes">{processesNum}</span></h2>
            
        </li></Link>
      </ul>
        <div className="outlet">
        {((props.activeTab === "tab1")&&(loading===false)) ? 
        (<FirstTab
          tecOptions = {tecnologiasOptions}
          tecnologiasID={tecnologiasID}
          tecSubOptions={tecSubOptions}
          lenguageOptions = {languagesOptions}
          languagesID = {languagesID}
          lenguageSubOptions={languageSubOptions}
          tags = {tags}
          setTags = {setTags}
          languages ={languages}
          setLanguages={setLanguages}
          cambios={cambios}
          token={token}
          id={id}
        />)
         : null}
        {props.activeTab === "tab2" ? <SecondTab /> : null}
        {props.activeTab === "tab3" ? <ThirdTab 
          processes={processes}
        /> : null}
        </div>
    </div>
    );
}

export default TabsFather;
