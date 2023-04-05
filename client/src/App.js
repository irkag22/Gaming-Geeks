import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect } from 'react';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { Form } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = 'Gaming Geeks';
  });
  return (
    <ChakraProvider>
      Hi 
    </ChakraProvider>
  );
}

export default App;




