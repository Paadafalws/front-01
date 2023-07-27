import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import './barra.css';

function Pesquisa() {
  const [textoDigitado, setTextoDigitado] = useState('');
  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);

  async function fetchAlunos() {
    try {
      const response = await axios.get(`http://15.229.23.203:8000/alunos/?search=${textoDigitado}`);
      setResultadosPesquisa(response.data);
    } catch (error) {
      console.error('Erro ao obter alunos:', error);
    }
  }

  useEffect(() => {
    fetchAlunos();
  }, [textoDigitado]);

  return (
    <section className="pesquisa">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="barra"
          onBlur={(evento) => {
            const textoDigitado = evento.target.value;
            setTextoDigitado(textoDigitado);
          }}
        />
        <BsSearch className="search-icon" />
        
      </div>
    </section>
  );
}

export default Pesquisa;
