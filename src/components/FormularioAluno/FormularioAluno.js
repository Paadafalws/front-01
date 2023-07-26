import React, { Component } from 'react';
import './FormularioAluno.css';
import { Alert } from 'react-bootstrap';

class FormularioAluno extends Component {
  state = {
    nome: '',
    rg: '',
    cpf: '',
    data_nascimento: '',
    celular: '',
    foto: null,
    error:null,
    sucess:false,
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
        console.log('Aluno adicionado com sucesso!');
        // Restaurar o estado para limpar os campos após o envio bem-sucedido
        this.setState({
          nome: '',
          rg: '',
          cpf: '',
          data_nascimento: '',
          celular: '',
          foto: null,
          error: null, // Limpar a mensagem de erro
          sucess: true, // Ativar o estado de sucesso
        });
        setTimeout(() =>{
          this.setState({ success:false }); 
        },3000);
      } else {
        // Tratar erros
        return response.json().then((data) =>{
          if (data.foto){
            throw new Error(data.foto[0]); // Lançar o erro com a mensagem recebida do servidor
          }
          if (data.rg){
            throw new Error(data.rg[0]); // Lançar o erro com a mensagem recebida do servidor
          }


        });
        
      }
    })
    .catch((error) => {
      // Atualizar o estado com o erro
      this.setState({ error: error.message, sucess: false }); // Certificar-se de definir o success como false em caso de erro
  
      // Definir um atraso de 3 segundos para redefinir o estado de erro para falso
      setTimeout(() => {
        this.setState({ error: null });
      }, 3000); // 3000 milissegundos = 3 segundos
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
          <label>Arquivo:</label>
          <input type="file" name="foto" onChange={this.handleFileChange} />
        </div>
        <button type="submit">Adicionar Cliente</button>

        {/* Exibir o Alert se houver erro */}
        {this.state.error && (
          <Alert variant="danger">
            {this.state.error}
          </Alert>
        )}

        {/* Exibir mensagem de sucesso se o formulário foi enviado com sucesso */}
        {this.state.sucess && (
          <Alert variant="success">
            Aluno adicionado com sucesso!
          </Alert>
        )}
      </form>
    );
  }
}

export default FormularioAluno;
