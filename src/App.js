import react, {useState, useEffect} from "react";
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

//Redux 
import { useDispatch, useSelector } from 'react-redux';
//Slices
import { clearMessage } from './store/slices/message';

import { PrivateOutlet } from './routers/PrivateOutlet';
import CandidatespageDB from "./pages/candidatesPageDB";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const activeTab1 = "tab1";
  const activeTab2 = "tab2";
  const activeTab3 = "tab3";

  const { isLoggedIn, authToken : token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLoggedIn){
    dispatch(clearMessage());
  }
     
  }, [dispatch, isLoggedIn, token]);

  return (
<HashRouter>
  <Routes>
  <Route path="*" element={<Notfoundpage/>} />

    <Route path="/login" element={<Loginpage/>} />
    <Route path="/open-recruiter" element={<PrivateOutlet isLogged={isLoggedIn} />}>
      <Route path="customers" element={<Customerspage/>}/>
      <Route path="candidates" element={<CandidatespageDB/>}/>
      <Route path="candidates/:id/info" element={<Studentpage/>}/>
    <Route path="candidates" element={<StudentpageDouble/>}>
      <Route path=":id/abilities" 
        element={<TabsFather
            activeTab={activeTab1}
            setActiveTab={setActiveTab}
        />}/>
      <Route path=":id/curriculum" 
        element={<TabsFather
            activeTab={activeTab2}
            setActiveTab={setActiveTab}
        />}/>
      <Route path=":id/processes" 
        element={<TabsFather
            activeTab={activeTab3}
            setActiveTab={setActiveTab}
        />}/>
    </Route>
    </Route>

    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
</HashRouter>

  );
  
}

export default App;
