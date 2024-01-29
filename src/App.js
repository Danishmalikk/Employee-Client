import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Protect from './Components/Protect';
import Home from './Components/Home';
import Employee from './Components/Employee'
import AddEmployee from './Components/EmployeeButton';

function App() {
  return (
    <div className='flex flex-row justify-center p-7'>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/login' element={<Login />}>Login</Route>
        <Route path='/register' element={<Register />}>Register</Route>
        <Route path='/employee' element={<Protect Component={Employee} />}> Employee</Route>
        <Route path='/addemployee' element={<Protect Component={AddEmployee} />}> Show Employee</Route>
      </Routes>
    </div>
  );
}

export default App;
