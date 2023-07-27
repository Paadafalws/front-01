import React from 'react';
import * as BiIcons from 'react-icons/bi';
import user from '../../Imagens/user.png'
import { Link } from 'react-router-dom'; // Caso esteja usando o React Router
import './Sidebar.css'; // Importe o arquivo de estilo para o Navbar Lateral


function Sidebar() {
  return (
    <aside id="sidebar" className="bg-light">
      <div className="p-4">
        <h3>Cargo</h3>
        <h3> Nome usuario</h3>
        <div className="round-image-container">

          <img src={user} alt="Imagem Redonda" className="round-image" />

        </div>
        <ul className="list-unstyled components ">
          <li>
            <Link to="/"> <BiIcons.BiHome size={20} /> Página Inicial</Link>
          </li>
          <li>
            <Link to="/about"> <BiIcons.BiBookHeart size={20}/> Contatos </Link>
          </li>
          <li>
          <Link to="/contato">   <BiIcons.BiLogoWhatsapp size={20} /> Contatos </Link>
          </li>
          <li>
            <Link to="/"> <BiIcons.BiLineChart size={20} /> Indicadores </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
