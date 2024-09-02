document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('listaitens');
    const galeria = document.getElementById('galeria');

    if (!select || !galeria) {
        console.error("Elementos 'listaitens' ou 'galeria' não encontrados no DOM.");
        return;
    }

    // Objeto de mapeamento: categorias para imagens e legendas
    const imagensPorCategoria = {
        comida: [
            { src: 'comida/comida_1.png', nome: 'Cachorro Quente', preco: 'R$ 5,00', quantidade: '25 unidades', peso: '150g' },
            { src: 'comida/comida_2.png', nome: 'Hamburger', preco: 'R$ 25,00', quantidade: '22 unidades', peso: '200g' },
            { src: 'comida/comida_3.png', nome: 'Bolo', preco: 'R$ 15,00', quantidade: '23 unidades', peso: '500g' }
        ],
        bebida: [
            { src: 'bebida/bebida_1.png', nome: 'Água', preco: 'R$ 2,00', quantidade: '23 unidades', peso: '500ml' },
            { src: 'bebida/bebida_2.png', nome: 'Guaraná', preco: 'R$ 4,00', quantidade: '12 unidades', peso: '2l' },
            { src: 'bebida/bebida_3.png', nome: 'Café', preco: 'R$ 2,00', quantidade: '21 unidades', peso: '250ml' }
        ],
        artesanato: [
            { src: 'artesanato/artesanato_1.png', nome: 'Vasos de Cerâmica', preco: 'R$ 30,00', quantidade: '23 unidades', peso: '1kg' },
            { src: 'artesanato/artesanato_2.png', nome: 'Cestos', preco: '20,00', quantidade: '21 unidades', peso: '800g' },
            { src: 'artesanato/artesanato_3.png', nome: 'Artesanato Diverso', preco: 'R$ 50,00', quantidade: '21 unidades', peso: '1.5kg' }
        ]
    };

    select.addEventListener('change', () => {
        const categoriaSelecionada = select.value;
        galeria.innerHTML = ''; // Limpa a galeria antes de adicionar novas imagens

        if (imagensPorCategoria[categoriaSelecionada]) {
            imagensPorCategoria[categoriaSelecionada].forEach(item => {
                const { src, descricao, nome, preco, quantidade, peso } = item;

                const imagem = new Image();
                imagem.src = src;

                imagem.onerror = () => console.error(`Erro ao carregar imagem: ${src}`);

                const imagemContainer = document.createElement('div');
                imagemContainer.className = 'imagem-container';

                const imagemElement = document.createElement('img');
                imagemElement.src = src;
                imagemElement.alt = descricao;

                const descricaoParagrafo = document.createElement('p');
                descricaoParagrafo.className = 'descricao-imagem';
                descricaoParagrafo.innerHTML = `
                    <strong>Nome:</strong> ${nome}<br>
                    <strong>Preço:</strong> ${preco}<br>
                    <strong>Quantidade:</strong> ${quantidade}<br>
                    <strong>Peso:</strong> ${peso}<br>
                    
                `;

                imagemContainer.appendChild(imagemElement);
                imagemContainer.appendChild(descricaoParagrafo);

                galeria.appendChild(imagemContainer);
            });
        } else {
            console.warn(`Nenhuma imagem definida para a categoria: ${categoriaSelecionada}`);
        }
    });
});
