import { Employer } from '../../Pages/Employer/Employer';
import { Employee } from '../../Pages/Employee/Employee';
import { Routes, Route } from 'react-router-dom';

import { Stages } from '../../Pages/Employer/Stages/Stages'
import { Documents } from '../../Pages/Documents/Documents';

import './App.css';

function App() {
  return (
    <div className="App p-4 container">
      <Routes>
        <Route path="/employee/*" element={<Employee/>}></Route>
        <Route path="/employer/*" element={<Employer/>}></Route>
        <Route path="/stages" element={<Stages/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
