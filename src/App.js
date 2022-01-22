import react, {useState} from "react";
import Loginpage from "./pages/loginPageRedux";
import {  Route, Routes, Navigate, HashRouter  } from 'react-router-dom';
import Customerspage from "./pages/customersPage";
import Notfoundpage from "./pages/404";
import Studentpage from "./pages/studentPage";
import ModalComponent from "./components/modalComponent";
import MenuComponent from "./components/menuComponent";
import Candidatespage from "./pages/candidatesPage";
import StudentpageDouble from "./pages/studentPageDobleVista";
import TabsFather from "./components/student-menu-tabs/tabsFather";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const activeTab1 = "tab1";
  const activeTab2 = "tab2";
  const activeTab3 = "tab3";
  return (
<HashRouter>
  <Routes>
  <Route path="*" element={<Notfoundpage/>} />
    <Route path="/login" element={<Loginpage/>} />
    <Route path="/customers" element={<Customerspage/>}/>
    <Route path="/candidates" element={<Candidatespage/>}/>
    <Route path="/student/info" element={<Studentpage/>}/>
    <Route path="/student/*" element={<StudentpageDouble/>}>

    <Route path="abilities" 
    element={<TabsFather
        activeTab={activeTab1}
        setActiveTab={setActiveTab}
    />}/>
        <Route path="curriculum" 
    element={<TabsFather
        activeTab={activeTab2}
        setActiveTab={setActiveTab}
    />}/>
        <Route path="processes" 
    element={<TabsFather
        activeTab={activeTab3}
        setActiveTab={setActiveTab}
    />}/>
    </Route>
    <Route path="/modal" element={<ModalComponent/>}/>
    <Route path="/menu" element={<MenuComponent/>}/>
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
</HashRouter>

  );
  
}

export default App;
