import React from 'react';
import { Link } from 'react-router-dom'; // Caso esteja usando o React Router
import './Sidebar.css'; // Importe o arquivo de estilo para o Navbar Lateral

function Sidebar() {
  return (
    <aside id="sidebar" className="bg-light">
      <div className="p-4">
        <h3>LOGO</h3>
        <ul className="list-unstyled components">
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/about">sobre</Link>
          </li>
          <li>
            <Link to="/contato">Dashbord com power bi ou python</Link>
          </li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
