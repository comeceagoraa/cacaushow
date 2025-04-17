// Função para mostrar detalhes do produto
function mostrarDetalhes(produto, nome, descricao, precoOriginal, precoDesconto) {
    const detalhes = document.getElementById('detalhes-produto');
    detalhes.style.display = 'block'; // Exibe a seção de detalhes

    // Rola a página até a seção de detalhes
    detalhes.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Define as imagens do carrossel para o produto selecionado
    const imagens = {
        camiseta1: ['imagens/camiseta1.jpg', 'imagens/camiseta1-2.jpg', 'imagens/camiseta1-3.jpg', 'imagens/camiseta1-4.jpg'],
        camiseta2: ['imagens/camiseta2.jpg', 'imagens/camiseta2-2.jpg', 'imagens/camiseta2-3.jpg', 'imagens/camiseta2-4.jpg'],
        chuteira: ['imagens/chuteira.jpg', 'imagens/chuteira-2.jpg', 'imagens/chuteira-3.jpg', 'imagens/chuteira-4.jpg'],
        chuteira2: ['imagens/chuteira2.jpg', 'imagens/chuteira2-2.jpg', 'imagens/chuteira2-3.jpg', 'imagens/chuteira2-4.jpg'],
        produto5: ['imagens/produto5.jpg', 'imagens/produto5-2.jpg', 'imagens/produto5-3.jpg', 'imagens/produto5-4.jpg'],
        produto6: ['imagens/produto6.jpg', 'imagens/produto6-2.jpg', 'imagens/produto6-3.jpg', 'imagens/produto6-4.jpg'],
        produto7: ['imagens/produto7.jpg', 'imagens/produto7-2.jpg', 'imagens/produto7-3.jpg', 'imagens/produto7-4.jpg'],
        produto8: ['imagens/produto8.jpg', 'imagens/produto8-2.jpg', 'imagens/produto8-3.jpg', 'imagens/produto8-4.jpg']
    };

    let indiceImagem = 0;
    const imagemCarrossel = document.getElementById('imagem-carrossel');

    // Atualiza a imagem do carrossel
    function atualizarCarrossel() {
        console.log("Atualizando carrossel para a imagem:", imagens[produto][indiceImagem]);
        imagemCarrossel.src = imagens[produto][indiceImagem];
    }

    // Função para mudar a imagem no carrossel
    window.mudarImagem = function (direcao) {
        console.log("Mudando imagem, direção:", direcao);
        console.log("Índice atual:", indiceImagem);
        indiceImagem = (indiceImagem + direcao + imagens[produto].length) % imagens[produto].length;
        console.log("Novo índice:", indiceImagem);
        atualizarCarrossel();
    };

    // Atualiza o nome, descrição e preços do produto
    document.getElementById('nome-produto').textContent = nome;
    document.getElementById('descricao-produto').textContent = descricao;
    document.getElementById('preco-original').textContent = `R$ ${precoOriginal}`;
    document.getElementById('preco-desconto').textContent = `R$ ${precoDesconto}`;

    // Define os links de pagamento para cada produto
    const linksPagamento = {
        camiseta1: 'https://pay.finalizacaocacaubr.online/nQ7kZ7R1MLN30eJ',
        camiseta2: 'https://pay.finalizacaocacaubr.online/521rZJoPQbBGeaX',
        chuteira: 'https://pay.finalizacaocacaubr.online/a6pVgdWPbYkGk7B',
        chuteira2: 'https://pay.finalizacaocacaubr.online/RmA83EeBwMr3PVp',
        produto5: 'https://pay.finalizacaocacaubr.online/2wq7Grj2Q8AGBAN',
        produto6: 'https://pay.finalizacaocacaubr.online/lqv1308qpq83xbj',
        produto7: 'https://pay.finalizacaocacaubr.online/PyE2Zy5DXDpZqRb',
        produto8: 'https://pay.finalizacaocacaubr.online/7vJOGY5P6PKGKXd'
    };

    // Atualiza o link de pagamento
    const botaoResgatar = document.getElementById('botao-resgatar');
    botaoResgatar.onclick = () => window.location.href = linksPagamento[produto];

    // Exibe a primeira imagem do carrossel
    atualizarCarrossel();
}

// Script para o carrossel de banners
const banners = document.querySelectorAll('.carrossel-banners img');
let bannerAtual = 0;

function trocarBanner() {
    banners[bannerAtual].classList.remove('ativo');
    bannerAtual = (bannerAtual + 1) % banners.length;
    banners[bannerAtual].classList.add('ativo');
}

setInterval(trocarBanner, 3000); // Troca a cada 3 segundos