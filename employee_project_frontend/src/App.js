// Import Custom Css File for the APP component
import './App.css';

// Import Custom Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Department from './components/Department';
import Departments from './components/Departments';
import DepartmentUpdate from './components/DepartmentUpdate';
import Employee from './components/Emplyee';
import Employees from './components/Employees';
import EmployeeUpdate from './components/EmployeeUpdate';



// Import React router Components
import {Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
      <>
        <Navbar />
      
        <Routes >
            <Route path='' element={<Home />}></Route>
            <Route path="department" element ={<Department />} ></Route>
            <Route path='departments/' element={<Departments />} ></Route>   
            <Route path='employees/' element={<Employees />}></Route>
            <Route path="employee/" element={<Employee />}></Route>    
        </Routes>
      </>
  );
}

export default App;
