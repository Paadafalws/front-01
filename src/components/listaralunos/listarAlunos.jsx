import React, { Component } from 'react';


class ListarAlunos extends Component {
  state = {
    data: [],
    loaded: false
  }

  componentDidMount() {
    fetch("http://localhost:8000/alunos/")
      .then(response => {
        if (response.status > 400) {
          // Código do comportamento em caso de problema na req
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  handleDelete = (alunoId) => {
    // Enviar a requisição de delete para o servidor
    fetch(`http://localhost:8000/alunos/${alunoId}/`, {
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
    window.location.href = `/editar-aluno/${alunoId}`;
  };

  render() {
    return (
      <div>
        {this.state.data.map(aluno => (
          <div key={aluno.id} className='App-table'>
            <img src={aluno.foto} alt={aluno.nome} className='foto'/>
            <h2>{aluno.nome}</h2>
            <h2>{aluno.rg}</h2>
            <h2>{aluno.cpf}</h2>
            <a href={aluno.foto}> Link foto</a>

            <button onClick={() => this.handleDelete(aluno.id)}>Delete</button>
            <button onClick={() => this.handleEdit(aluno.id)}>Edit</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ListarAlunos;
