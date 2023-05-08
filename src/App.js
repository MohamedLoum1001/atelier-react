import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home  from './Components/Home/Home';
import Product  from './Components/Product/Product';
import Services from './Components/Services/Services';
import Inscription from './Components/Inscription/Inscription';
import Connexion from './Components/Connexion/Connexion';
import RecupMdp from './Components/RecupMdp/RecupMdp';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/product' element={<Product />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/recupMdp' element={<RecupMdp />} />
      </Routes>
    </div>
  );
}

export default App;
