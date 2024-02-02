import './App.css'
import { ChakraProvider, } from '@chakra-ui/react';
import { RevisionHistoryPage } from './RevisionHistoryPage';

function App() {

  return (
    <ChakraProvider>
      <RevisionHistoryPage />
    </ChakraProvider>
  )
}

export default App
