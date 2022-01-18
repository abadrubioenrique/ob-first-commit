import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";
import '../../styles/tabsmenu.scss'
import ThirdTab from "./thirdTab";
const TabsFather = (props) => {


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
        <h2>Procesos</h2>
            
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
        {props.activeTab === "tab3" ? <ThirdTab /> : null}
        </div>
    </div>
    );
}

export default TabsFather;
