import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";
import '../../styles/tabsmenu.scss'
import ThirdTab from "./thirdTab";
import { PROCESS_STATUS } from "../../models/process-enum";
import {Process} from '../../models/process.class';

const TabsFather = (props) => {
  const process1 = new Process("Título Oferta 1","Empresa SA", 7, new Date('11-5-2022'),PROCESS_STATUS.CONTRATADO)
  const process2 = new Process("Título Oferta 2","Empresa SA", 5, new Date('8 nov 2022'),PROCESS_STATUS.PDTE_ENTREVISTA)
  const process3 = new Process("Título Oferta 3","Empresa SA", 3, new Date('10 nov 2022'),PROCESS_STATUS.ENTREVISTADO)
  const process4 = new Process("Título Oferta 4","Empresa SA", 1, new Date('15 nov 2022'),PROCESS_STATUS.ESPERANDO_CV)
  const process5 = new Process("Título Oferta 5","Empresa SA", 2, new Date('18 nov 2022'),PROCESS_STATUS.RECHAZADO)
  const [processes, setProcesses] = useState([process1 , process2, process3, process4, process5]);

  let processesNum = processes.length;

    const [tags, setTags] = useState([]);
    const [languages, setLanguages] = useState([]);
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
        <ul className="nav">
        <Link to="/student/abilities"><li 
            className={props.activeTab === "tab1" ? "tab-active" : ""}
            onClick={handleTab1}
        >
            <h2>Habilidades</h2>
        </li></Link>

        <Link to="/student/curriculum"><li
            className={props.activeTab === "tab2" ? "tab-active" : ""}
            onClick={handleTab2}
        >
             
            <h2>Currículum Vitae</h2>
        </li></Link>
        <Link to="/student/processes"><li
            className={props.activeTab === "tab3" ? "tab-active" : ""}
            onClick={handleTab3}
        >
        <h2>Procesos<span className="num-processes">{processesNum}</span></h2>
            
        </li></Link>
      </ul>
        <div className="outlet">
        {props.activeTab === "tab1" ? 
        <FirstTab
        tags = {tags}
        setTags = {setTags}
        languages ={languages}
        setLanguages={setLanguages}

        />
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
