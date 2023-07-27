import React, { Component } from 'react';
import './listarAlunos.css';
import Pesquisa from '../barra/barra';

class ListarAlunos extends Component {
  state = {
    data: [],
    loaded: false
  }

  componentDidMount() {
    this.fetchAlunos();
  }

  fetchAlunos() {
    fetch("http://15.229.23.203:8000/alunos/")
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter alunos');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          data,
          loaded: true
        });
      })
      .catch(error => {
        console.error('Erro ao obter alunos:', error);
      });
  }

  handleDelete = (alunoId) => {
    // Enviar a requisição de delete para o servidor
    fetch(`http://15.229.23.203:8000/alunos/${alunoId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (response.status === 204) {
          // Se o delete for bem-sucedido, atualize a lista de alunos
          this.setState(prevState => ({
            data: prevState.data.filter(aluno => aluno.id !== alunoId)
          }));
        }
      })
      .catch(error => {
        // Tratar erros, se necessário
      });
  };

  handleEdit = (alunoId) => {
    // Redirecionar para a página de edição do aluno com base no ID
    // Exemplo: /editar-aluno/1 (para editar o aluno com ID 1)
    window.location.href = `/EditarAluno/${alunoId}`;
  };

  render() {
    return (
      <>
        <div className='barra'>
          <Pesquisa />
        </div>
        <div className='tabela'>
          <table className="table table-bordered table-striped ">
            <thead>
              <tr>
                <th className='texto'>Nome</th>
                <th className='texto'>RG</th>
                <th className='texto'>CPF</th>
                <th className='texto'>Link Arquivo</th>
                <th className='texto'>Actions</th>
                <th className='texto'>Editar</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(aluno => (
                <tr key={aluno.id}>
                  <td className='texto'>{aluno.nome}</td>
                  <td className='texto'>{aluno.rg}</td>
                  <td className='texto'>{aluno.cpf}</td>
                  <td className='texto'><a href={aluno.foto}>Link Arquivo</a></td>
                  <td>
                    <button onClick={() => this.handleDelete(aluno.id)} className="btn btn-danger">Delete</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleEdit(aluno.id)} className="btn btn-primary"> Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ListarAlunos;
