import React from 'react';
import { Nav } from 'react-bootstrap';
import user from '../../Imagens/user.png'
import { NavLink } from "react-router-dom";
import './Sidebar.css'; // Estilos personalizados para a sidebar

const Sidebar = () => {
  return (
    <Nav className="sidebar">
      <img src={user} className='foto' alt="teta"/>
      <Nav.Item>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/about">About</NavLink>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#services">Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
