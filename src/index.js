import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { 
  HashRouter, 
  Routes, 
  Route 
} from "react-router-dom";

import HomePage from './pages/HomePage';
import Register from './pages/Register';
import './fonts.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
