import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import * as React from 'react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Gaming Geeks';
  });
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}

export default App;




