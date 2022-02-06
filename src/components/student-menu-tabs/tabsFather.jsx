import React, { useState,useEffect } from "react";
import { Link, useParams  } from "react-router-dom";
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";
import '../../styles/tabsmenu.scss'
import ThirdTab from "./thirdTab";
import { PROCESS_STATUS } from "../../models/process-enum";
import {Process} from '../../models/process.class';
import { getCandidateById, getIdiomasPure,  getTecnologiasPure} from "../../services/axios.CRUD.service";
import { Tecnologia } from "../../models/tecnologia.class";
import { levels } from "../../models/niveles";
import { TagsDB } from "../../models/tagdb.class";

const TabsFather = (props) => {
  const {id} = useParams();
  const process1 = new Process("Título Oferta 1","Empresa SA", 7, new Date('11-5-2022'),PROCESS_STATUS.CONTRATADO)
  const process2 = new Process("Título Oferta 2","Empresa SA", 5, new Date('8 nov 2022'),PROCESS_STATUS.PDTE_ENTREVISTA)
  const process3 = new Process("Título Oferta 3","Empresa SA", 3, new Date('10 nov 2022'),PROCESS_STATUS.ENTREVISTADO)
  const process4 = new Process("Título Oferta 4","Empresa SA", 1, new Date('15 nov 2022'),PROCESS_STATUS.ESPERANDO_CV)
  const process5 = new Process("Título Oferta 5","Empresa SA", 2, new Date('18 nov 2022'),PROCESS_STATUS.RECHAZADO)
  const processes= ([process1 , process2, process3, process4, process5]);

  const [tecnologiasPure,setTecnologiasPure]= useState(['']);
  const [tecnologiasData,setTecnologiasData] = useState(['']);

  const [languagesPure,setLanguagesPure]= useState(['']);
  const [languagesData,setLanguagesData] = useState(['']);

  const [candidate, setCandidate] = useState("");
  const [loading, setLoading] = useState(true);

  let processesNum = processes.length;

  const [tags, setTags] = useState("");
  const [tecFromDB, setTecFromDB]= useState("")
  const [languages, setLanguages] = useState("");
  const [langFromDB, setLangFromDB]=useState("")

  //Suboptions
  //Tecnologias
  const tec1=[new levels(1,'INIC.')]
  const tec2=[new levels(2,'INTER.')]
  const tec3=[new levels (3,'AVAN.')]
  const tecSubOptions=[tec1,tec2,tec3];
  //Languages
  const lang1=[new levels(1,'BÁSICO.')]
  const lang2=[new levels(2,'INTER.')]
  const lang3=[new levels (3,'AVAN.')]
  const lang4=[new levels(4,'NATIVO')]
  const languageSubOptions=[lang1,lang2,lang3,lang4];

  //Cambios en las etiquetas
  const [cambios,setCambios] = useState(false)
  //Body
  const [body,setBody]=useState("")

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
      },700);
      getCandidateById(token,id,setCandidate);
      getTecnologiasPure(token, setTecnologiasPure);
      getIdiomasPure(token,setLanguagesPure);
      if((candidate!=="") && (loading===false)){
        //Tecnologías
          setTags(candidate.tecnologias.map(tecnologia=>
            (tecnologia.nombre +" " +tecSubOptions[tecnologia.meta.pivot_nivel-1][0].name+ " " + tecnologia.id + " " + tecSubOptions[tecnologia.meta.pivot_nivel-1][0].id)));
          setTecFromDB(candidate.tecnologias.map(tecnologia=>
            (tecnologia.nombre +" "+ tecSubOptions[tecnologia.meta.pivot_nivel-1][0].name+ " " + tecnologia.id+ " " + tecSubOptions[tecnologia.meta.pivot_nivel-1][0].id)));
        //Idiomas
          setLanguages(candidate.idiomas.map(idioma=>
            (idioma.nombre +" "+ languageSubOptions[idioma.meta.pivot_nivel-1][0].name + " " + idioma.id + " " +languageSubOptions[idioma.meta.pivot_nivel-1][0].id)));
          setLangFromDB(candidate.idiomas.map(idioma=>
            (idioma.nombre +" "+ languageSubOptions[idioma.meta.pivot_nivel-1][0].name + " " + idioma.id + " " +languageSubOptions[idioma.meta.pivot_nivel-1][0].id)));
      }

    },[loading])

    useEffect(() => {
      if((JSON.stringify(tags) !== JSON.stringify(tecFromDB))
      ||(JSON.stringify(languages) !== JSON.stringify(langFromDB))){
        setCambios(true)
      }
    }, [tags,languages]);

    useEffect(() => {
      if((tecnologiasPure!==[''])){
        setTecnologiasData(tecnologiasPure.map(tecnologia=>
          new Tecnologia(tecnologia.id,tecnologia.nombre)
        ))
        setLanguagesData(languagesPure.map(tecnologia=>
          new Tecnologia(tecnologia.id,tecnologia.nombre)
        ))
      }

    }, [tecnologiasPure, languagesPure]);

    useEffect(() => {
      if(tags!==''){
          const tecs=(tags.map((tag) =>(new TagsDB(tag.split(' ')[2],tag.split(' ')[3]))));
          const bodyTec=(tecs.map(tec =>`"${tec.id}": { "nivel": ${tec.nivel}}`))
          const langs=(languages.map((language) =>(new TagsDB(language.split(' ')[2],language.split(' ')[3]))))
          const bodyLang=(langs.map(lang =>`"${lang.id}": { "nivel": ${lang.nivel}}`))
          setBody(`{"tecnologias":{${bodyTec}},"idiomas":{${bodyLang}}}`) 
        }   
    }, [tags,languages,body]);

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
          tecOptions = {tecnologiasData}
          tecSubOptions={tecSubOptions}
          lenguageOptions = {languagesData}
          lenguageSubOptions={languageSubOptions}
          tags = {tags}
          setTags = {setTags}
          languages ={languages}
          setLanguages={setLanguages}
          cambios={cambios}
          token={token}
          id={id}
          body={body}
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
