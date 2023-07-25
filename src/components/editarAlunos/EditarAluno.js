import React, { Component } from 'react';

class EditarAluno extends Component {
  state = {
    nome: '',
    rg: '',
    cpf: '',
    data_nascimento: '',
    celular: '',
    foto: null,
  };

  componentDidMount() {
    // Aqui você pode fazer uma requisição GET para obter os dados do aluno pelo ID
    // e preencher o estado com os dados atuais do aluno.
    const alunoId = this.props.match.params.id; // Obtém o ID do aluno da URL
    fetch(`http://localhost:8000/alunos/${alunoId}/`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          nome: data.nome,
          rg: data.rg,
          cpf: data.cpf,
          data_nascimento: data.data_nascimento,
          celular: data.celular,
          foto: data.foto,
        });
      })
      .catch(error => {
        // Tratar erros, se necessário
      });
  }

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

    // Formatando a data para o formato americano (YYYY-MM-DD) antes de enviar para o Django
    const dataNascimentoFormatada = new Date(this.state.data_nascimento).toISOString().slice(0, 10);
    formData.append('data_nascimento', dataNascimentoFormatada);

    formData.append('celular', this.state.celular);
    formData.append('foto', this.state.foto);

    const alunoId = this.props.match.params.id; // Obtém o ID do aluno da URL

    fetch(`http://localhost:8000/alunos/${alunoId}/`, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          // Aluno atualizado com sucesso
          console.log('Aluno atualizado com sucesso!');
        } else {
          // Tratar erros, se necessário
          console.error('Erro ao atualizar aluno');
        }
      })
      .catch((error) => {
        // Tratar erros, se necessário
        console.error('Erro ao atualizar aluno', error);
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
        <button type="submit">Salvar</button>
      </form>
    );
  }
}

export default EditarAluno;
