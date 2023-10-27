 import './estilo.css';

import icone1 from "../../Assets/entrada.png";
import icone2 from "../../Assets/massa.png";
import icone3 from "../../Assets/carne.png";
import icone4 from "../../Assets/bebidas.png";
import icone5 from "../../Assets/salada.png";
import icone6 from "../../Assets/sobremesa.png";

const Categorias = () => {
    return (
        <section className='secao-categorias'>
            <div className='container-botoes'>

                <button className="">
                    <img src={icone1} alt="Entradas" />
                    Entradas
                </button>
 
                <button className="">
                    <img src={icone2} alt="massas" />
                    Massas
                </button>

                <button className="">
                    <img src={icone3} alt="carnes" />
                    Carnes
                </button>

                <button className="">
                    <img src={icone4} alt="bebidas" />
                    Bebidas
                </button>

                <button className="">
                    <img src={icone5} alt="saladas" />
                    Saladas
                </button>

                <button className="">
                    <img src={icone6} alt="sobremesas" />
                    Sobremesas
                </button>
            </div>
        </section>
    );
};

export default Categorias;