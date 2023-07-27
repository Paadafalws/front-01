import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
//import ListaCursos from './components/listaCursos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/footer/footer';
import ListarAlunos from '../../components/listaralunos/listarAlunos';
import Sidebar  from '../../components/sidebar/Sidebar';
import Modal from '../../components/modal/modal';
import NAVBAR from '../../components/Navbars/Navbars';
import Header from '../../components/header/header';
import './EditarAluno.css'

function EditarAluno() {
  const { id } = useParams();

  const [aluno, setAluno] = useState({
    nome: '',
    rg: '',
    cpf: '',
    data_nascimento: '',
    celular: '',
    foto: null,
  });

  // Função para buscar os detalhes do aluno com base no ID
  const buscarDetalhesAluno = useCallback(async () => {
    try {
      const response = await fetch(`http://15.229.23.203:8000/alunos/${id}/`);
      if (response.ok) {
        const data = await response.json();
        setAluno(data);
      } else {
        console.error('Erro ao buscar detalhes do aluno');
      }
    } catch (error) {
      console.error('Erro ao buscar detalhes do aluno', error);
    }
  }, [id]);

  // Função para atualizar o estado quando os campos de edição do aluno forem alterados
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno((prevAluno) => ({ ...prevAluno, [name]: value }));
  };

  // Função para enviar as alterações para o servidor quando o formulário for enviado
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Anexar os campos de texto
      formData.append('nome', aluno.nome);
      formData.append('rg', aluno.rg);
      formData.append('cpf', aluno.cpf);
      formData.append('data_nascimento', aluno.data_nascimento);
      formData.append('celular', aluno.celular);

      // Verificar se há uma nova foto para atualizar
      if (aluno.foto instanceof File) {
        formData.append('foto', aluno.foto);
      }

      const response = await fetch(`http://15.229.23.203:8000/alunos/${id}/`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        console.log('Aluno atualizado com sucesso!');
        // Redirecionar para a página de detalhes do aluno ou para a lista de alunos
        // Se necessário, você pode usar uma biblioteca de roteamento como o react-router-dom para lidar com a navegação.
      } else {
        console.error('Erro ao atualizar aluno');
      }
    } catch (error) {
      console.error('Erro ao atualizar aluno', error);
    }
  };

  // Chamar a função para buscar os detalhes do aluno quando a página for carregada
  useEffect(() => {
    buscarDetalhesAluno();
  }, [buscarDetalhesAluno]);

  return (

    <>
    <Header />
    <NAVBAR />
    <Sidebar />
    <Modal />

    <div className="editar-aluno-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={aluno.nome}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>RG:</label>
          <input
            type="text"
            name="rg"
            value={aluno.rg}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={aluno.cpf}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="data_nascimento"
            value={aluno.data_nascimento}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Celular:</label>
          <input
            type="text"
            name="celular"
            value={aluno.celular}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Foto:</label>
          <input type="file" name="foto" onChange={handleChange} className="form-control-file" />
        </div>
        <button type="submit" className="btn btn-primary">
          Atualizar 
        </button>
      </form>
    </div>

    <Footer />
  </>
  );
}

export default EditarAluno;
