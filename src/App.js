import Loginpage from "./models/loginPage";
import {  Route, Routes, Navigate, HashRouter  } from 'react-router-dom';

function App() {
  return (
<HashRouter>
  <Routes>
    <Route path="/login" element={<Loginpage/>} />
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
</HashRouter>

  );
}

export default App;
