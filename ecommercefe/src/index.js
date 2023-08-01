import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import AllProducts from './screens/AllProducts';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Contact from './screens/Contact';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeScreen />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
