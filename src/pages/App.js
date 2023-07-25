
import foto from '../Imagens/foto.png'
import './App.css';
//import ListaCursos from './components/listaCursos';
import Footer from '../components/footer/footer';
import ListarAlunos from '../components/listaralunos/listarAlunos';
import FormularioAluno from '../components/FormularioAluno/FormularioAluno';
import Sidebar  from '../components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-logo" alt="logo" />
        <h1>Apolices</h1>
      </header>
      <Sidebar/>
      <FormularioAluno/>
      <ListarAlunos/>
      <Footer/>
    </div>
  );
}

export default App;
