import {ChakraProvider} from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import {Header} from "./components/Header"
import './App.css';

function App() {
  return (
  <ChakraProvider>
    <AlertProvider>
      <main>
        <Header />
      </main>
    </AlertProvider>
  </ChakraProvider>
  );
}

export default App;