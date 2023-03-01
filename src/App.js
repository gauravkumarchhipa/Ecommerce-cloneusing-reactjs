import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='store' element={<OurStore/>}/>
            <Route path='blogs' element={<Blog/>}/>
            <Route path='compare-product' element={<CompareProduct/>}/>
            <Route path='wishlist' element={<Wishlist/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='forgot-password' element={<Forgotpassword/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='reset-password' element={<ResetPassword/>}/>
            

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
