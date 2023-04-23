import { Employer } from '../../Pages/Employer/Employer';
import { Employee } from '../../Pages/Employee/Employee';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App p-4 container">
      <Routes>
        <Route path="/employer/*" element={<Employer/>}></Route>
        <Route path="/employee/*" element={<Employee/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
