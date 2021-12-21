import Loginpage from "./models/loginPage";
import {  Route, Routes, Navigate, HashRouter  } from 'react-router-dom';
import Userspage from "./models/usersPage";

function App() {
  return (
<HashRouter>
  <Routes>
    <Route path="/login" element={<Loginpage/>} />
    <Route path="/users" element={<Userspage/>}/>
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
</HashRouter>

  );
}

export default App;
