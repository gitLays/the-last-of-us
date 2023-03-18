const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem'); 

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        const imagenAtiva = document.querySelector('.ativa');
        imagenAtiva.classList.remove('ativa');
        imagens[indice].classList.add('ativa');
    });
});
 