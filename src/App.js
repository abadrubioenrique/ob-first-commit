import Loginpage from "./pages/loginPage";
import {  Route, Routes, Navigate, HashRouter  } from 'react-router-dom';
import Customerspage from "./pages/customersPage";
import Notfoundpage from "./pages/404";
import Studentpage from "./pages/studentPage";
import ModalComponent from "./components/modalComponent";
import MenuComponent from "./components/menuComponent";
import Candidatespage from "./pages/candidatesPage";

function App() {
  
  return (
<HashRouter>
  <Routes>
  <Route path="*" element={<Notfoundpage/>} />
    <Route path="/login" element={<Loginpage/>} />
    <Route path="/customers" element={<Customerspage/>}/>
    <Route path="/candidates" element={<Candidatespage/>}/>
    <Route path="/student" element={<Studentpage/>}/>
    <Route path="/modal" element={<ModalComponent/>}/>
    <Route path="/menu" element={<MenuComponent/>}/>
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
</HashRouter>

  );
  
}

export default App;
