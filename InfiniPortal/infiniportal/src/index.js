import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import Footer from '../src/components/Footer'
import Signup from './Signup'
import Pricing from './Pricing'
import About from './About'
import './styles.css';
import Navbar from '../src/components/Navbar'
import Home from './Home'
import NotFound from './NotFound'
import Login from './Login'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="pricing" element={<Pricing/>} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);


