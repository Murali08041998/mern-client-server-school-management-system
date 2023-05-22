import { ToastContainer } from 'react-toastify';
import React from 'react';
import './App.css';
import './index.css'
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import LoginForm from './components/LoginForm';
import AddForm from './components/AddForm';
import Viewform from './components/Viewform';
function App() {
  return <>
  <div>
   <NavbarComponent/>
   <Routes>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/loginform' element={<LoginForm/>}/>
    <Route path='/addform' element={<AddForm/>}/>
    <Route path='/viewform' element={<Viewform/>}/>
   </Routes>
   {/* <ToastContainer 
      autoClose={1000}
      /> */}
    </div> 
  </>
}

export default App;
