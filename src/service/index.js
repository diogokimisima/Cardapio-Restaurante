import { produtos } from '../Data/data-produtos';

export const buscarProduto = (textoDigitado) => {
    return produtos.filter(
        (produto) => produto.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) ||
                    produto.descricao.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) ||
                    produto.categoria.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())
    );
};

export const filtrarProdutos = (categoria) => {
    return produtos.filter (
        (produto) => produto.categoria === categoria

    );
};

export const produtosEntradas = filtrarProdutos("Entradas");