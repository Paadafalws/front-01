
import './App.css';
//import ListaCursos from './components/listaCursos';
import Footer from '../components/footer/footer';
import ListarAlunos from '../components/listaralunos/listarAlunos';
import Sidebar  from '../components/sidebar/Sidebar';
import Modal from '../components/modal/modal';
import NAVBAR from '../components/Navbars/Navbars';
import Header from '../components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <NAVBAR/>

      <Sidebar/>
      <div className='tabela2'>
      <Modal/>

      </div>
      <ListarAlunos/>
      <Footer/>
    </div>
  );
}

export default App;
