import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

import HomePage from './pages/HomePage';
import Register from './pages/Register';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import ThankYou from './pages/ThankYou';
import './fonts.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/thankyou" element={<ThankYou/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
