import Login from './Pages/Login';
import RegisterUser from './Pages/RegisterUser';
import NavBar from './Components/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register-user" element={<RegisterUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
