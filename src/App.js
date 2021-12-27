import Loginpage from "./pages/loginPage";
import {  Route, Routes, Navigate, HashRouter  } from 'react-router-dom';
import Userspage from "./pages/usersPage";
import Notfoundpage from "./pages/404";

function App() {
  return (
<HashRouter>
  <Routes>
  <Route path="*" element={<Notfoundpage/>} />
    <Route path="/login" element={<Loginpage/>} />
    <Route path="/users" element={<Userspage/>}/>
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
</HashRouter>

  );
}

export default App;
