import logo from './logo.svg';
import './App.css';
import About from './components/About';
import {BrowserRouter,Routes,Router} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Router>
      <Home/>
      <About/>
      </Router>
      </BrowserRouter>
      
  
  );
}

export default App;
