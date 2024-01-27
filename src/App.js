import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Employee from './Components/Employee';
import Header from './Components/Header';
function App() {
  return (
    <div className='flex flex-row justify-center p-7'>
      <Routes>
        <Route path='/' element={<Header />}>Header</Route>
        <Route path='/login' element={<Login />}>Login</Route>
        <Route path='/register' element={<Register />}>Register</Route>
        <Route path='/employee' element={<Employee />}>Employee</Route>
      </Routes>
    </div>
  );
}

export default App;
