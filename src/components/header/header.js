import React from 'react';
import foto from '../../Imagens/foto.png'; // Verifique o caminho correto para a imagem

function Header() {
  return (
    <header className="App-header">
      <img src={foto} className="App-logo" alt="logo" />

    </header>
  );
}

export default Header;
