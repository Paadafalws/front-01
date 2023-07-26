import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

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
      const response = await fetch(`http://15.229.23.203:8000/alunos/${id}`);
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
      const response = await fetch(`http://15.229.23.203:8000/alunos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aluno),
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
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={aluno.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>RG:</label>
        <input
          type="text"
          name="rg"
          value={aluno.rg}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={aluno.cpf}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Data de Nascimento:</label>
        <input
          type="date"
          name="data_nascimento"
          value={aluno.data_nascimento}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Celular:</label>
        <input
          type="text"
          name="celular"
          value={aluno.celular}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Foto:</label>
        <input type="file" name="foto" onChange={handleChange} />
      </div>
      <button type="submit">Atualizar Aluno</button>
    </form>
  );
}

export default EditarAluno;
