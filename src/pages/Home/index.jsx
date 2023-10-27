import './estilo.css';
import { useState } from 'react';

import {
  filtrarProdutos,
  buscarProduto,
  produtosEntradas,
} from "../../service";
import Banner from "../../Assets/banner.png";
import Categorias from '../../componentes/Categorias';
import CampoDeBusca from '../../componentes/CampoDeBusca';
import Cards from '../../componentes/Cards';


const Home = () => {

  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  return (
    <div>
      <header className="banner">
        <img src={Banner} alt="banner" />
        <div>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados.
          </p>
        </div>
      </header>
      <main className="container-principal">
        <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado}/>

        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado} 
          handleBusca={handleBusca}
        />

        <section className="secao-cards">
          <div>
            <h2>Cardápio</h2>
          </div>

          <div className="container-cards">
            {dadosFiltrados.map((produto) => (
            <Cards key={produto.id} produto={produto}/>
            ))}
          </div>

        </section>
      </main>
    </div>
  );
};

export default Home;