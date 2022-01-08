import React, { useState } from "react";
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";
import '../../styles/tabsmenu.scss'
import ThirdTab from "./thirdTab";
const TabsFather = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
      };

      const handleTab2 = () => {
        setActiveTab("tab2");
      };
      const handleTab3 = () => {
        setActiveTab("tab3");
      };
    return (
    <div className="tabs">
        <ul className="nav">
        <li 
            className={activeTab === "tab1" ? "tab-active" : ""}
            onClick={handleTab1}
        >
            <h2>Habilidades</h2>
        </li>

        <li
            className={activeTab === "tab2" ? "tab-active" : ""}
            onClick={handleTab2}
        >
             <h2>Currículum Vitae</h2>
        </li>
        <li
            className={activeTab === "tab3" ? "tab-active" : ""}
            onClick={handleTab3}
        >
             <h2>Procesos</h2>
        </li>
      </ul>
        <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : null}
        {activeTab === "tab2" ? <SecondTab /> : null}
        {activeTab === "tab3" ? <ThirdTab /> : null}
        </div>
    </div>
    );
}

export default TabsFather;
