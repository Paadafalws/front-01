import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import About from './pages/teste/about';
import EditarAluno from './pages/editaraluno/EditarAluno';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/" element={<App />} />
        <Route path="/EditarAluno/:id" element={<EditarAluno />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
