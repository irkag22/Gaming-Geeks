import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import * as React from 'react';
import { useEffect } from 'react';
import Login from './pages/Login';

function App() {
  useEffect(() => {
    document.title = 'Gaming Geeks';
  });
  return (
    <ChakraProvider>
      <Header />
      <Login/>
    </ChakraProvider>
  );
}

export default App;




