import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import HomeServico from './pages/HomeServico';
import HomeCliente from './pages/HomeCliente';
import TipodeAnuncio from './pages/TipodeAnuncio';
import InserirCarro from './pages/InserirCarro';
import InserirMoto from './pages/InserirMoto';
import InserirBarco from './pages/InserirBarco';
import InserirCasa from './pages/InserirCasa';
import InserirBike from './pages/InserirBike';
import MeusAnuncios from './pages/MeusAnuncios';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      <BrowserRouter>
        

        <Container>
          <Routes>
            <Route path="/" element={<PaginaInicial/>} />
            <Route path="/servico" element={<HomeServico/>} />
            <Route path="/cliente" element={<HomeCliente/>} />
            <Route path="/tipoanuncio" element={<TipodeAnuncio/>} />
            <Route path="/anunciarcarro" element={<InserirCarro/>} />
            <Route path="/anunciarcarro/:id" element={<InserirCarro />} />
            <Route path="/anunciarmoto" element={<InserirMoto/>} />
            <Route path="/anunciarmoto/:id" element={<InserirMoto />} />
            <Route path="/anunciarbarco" element={<InserirBarco/>} />
            <Route path="/anunciarbarco/:id" element={<InserirBarco />} />
            <Route path="/anunciarcasa" element={<InserirCasa/>} />
            <Route path="/anunciarcasa/:id" element={<InserirCasa />} />
            <Route path="/anunciarbike" element={<InserirBike/>} />
            <Route path="/anunciarbike/:id" element={<InserirBike />} />
            <Route path="/meusanuncios" element={<MeusAnuncios/>} />
          </Routes>
        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;
