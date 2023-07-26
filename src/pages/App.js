
import foto from '../Imagens/foto.png'
import './App.css';
//import ListaCursos from './components/listaCursos';
import Footer from '../components/footer/footer';
import ListarAlunos from '../components/listaralunos/listarAlunos';
import FormularioAluno from '../components/FormularioAluno/FormularioAluno';
import Sidebar  from '../components/sidebar/Sidebar';
import Modal from '../components/modal/modal';
import NAVBAR from '../components/Navbars/Navbars';
import Login from '../components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-logo" alt="logo" />
        <h1></h1>
      </header>
      <NAVBAR/>
      <Sidebar></Sidebar>
      <Modal> </Modal>
      <ListarAlunos/>

      <Footer/>
    </div>
  );
}

export default App;
