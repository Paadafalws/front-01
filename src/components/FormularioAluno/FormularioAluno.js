import React, { Component } from 'react';

class FormularioAluno extends Component {
  state = {
    nome: '',
    rg: '',
    cpf: '',
    data_nascimento: '',
    celular: '',
    foto: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (e) => {
    this.setState({ foto: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', this.state.nome);
    formData.append('rg', this.state.rg);
    formData.append('cpf', this.state.cpf);
    formData.append('data_nascimento', this.state.data_nascimento);
    formData.append('celular', this.state.celular);
    formData.append('foto', this.state.foto);

    fetch('http://15.229.23.203:8000/alunos/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.status === 201) {
          // Aluno adicionado com sucesso
          // Atualize a lista de alunos, se necessário
          // Você pode fazer isso emitindo um evento para o componente pai ou usando Redux, por exemplo.
          console.log('Aluno adicionado com sucesso!');
        } else {
          // Tratar erros, se necessário
          console.error('Erro ao adicionar aluno');
        }
      })
      .catch((error) => {
        // Tratar erros, se necessário
        console.error('Erro ao adicionar aluno', error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>RG:</label>
          <input
            type="text"
            name="rg"
            value={this.state.rg}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={this.state.cpf}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="data_nascimento"
            value={this.state.data_nascimento}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Celular:</label>
          <input
            type="text"
            name="celular"
            value={this.state.celular}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Foto:</label>
          <input type="file" name="foto" onChange={this.handleFileChange} />
        </div>
        <button type="submit">Adicionar Aluno</button>
      </form>
    );
  }
}

export default FormularioAluno;
