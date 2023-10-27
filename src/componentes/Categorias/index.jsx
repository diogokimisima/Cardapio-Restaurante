 import './estilo.css';

import icone1 from "../../Assets/entrada.png";
import icone2 from "../../Assets/massa.png";
import icone3 from "../../Assets/carne.png";
import icone4 from "../../Assets/bebidas.png";
import icone5 from "../../Assets/salada.png";
import icone6 from "../../Assets/sobremesa.png";

const Categorias = ({handleFiltro, botaoClicado}) => {
    return (
        <section className='secao-categorias'>
            <div className='container-botoes'>

                <button className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Entradas")}>
                    <img src={icone1} alt="Entradas" />
                    Entradas
                </button>
 
                <button className={botaoClicado === "Massas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Massas")}>
                    <img src={icone2} alt="massas" />
                    Massas
                </button>

                <button className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Carnes")}>
                    <img src={icone3} alt="carnes" />
                    Carnes
                </button>

                <button className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Bebidas")}>
                    <img src={icone4} alt="bebidas" />
                    Bebidas
                </button>

                <button className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Saladas")}>
                    <img src={icone5} alt="saladas" />
                    Saladas
                </button>

                <button className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Sobremesas")}>
                    <img src={icone6} alt="sobremesas" />
                    Sobremesas
                </button>
            </div>
        </section>
    );
};

export default Categorias;