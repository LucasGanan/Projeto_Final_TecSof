const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let indice = 0;

if (slides.length > 0) {
    function mostrarSlide(n) {
        slides.forEach(slide => slide.classList.remove("ativo"));
        dots.forEach(dot => dot.classList.remove("ativo"));

        slides[n].classList.add("ativo");
        dots[n].classList.add("ativo");
        indice = n;
    }

    setInterval(() => {
        indice++;
        if (indice >= slides.length) {
            indice = 0;
        }
        mostrarSlide(indice);
    }, 7000);

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const slide = Number(dot.dataset.slide);
            mostrarSlide(slide);
        });
    });
}

const sliderNoticias = document.querySelector(".slider-noticias");
const btnAnterior = document.querySelector("#anterior");
const btnProximo = document.querySelector("#proximo");
let posicao = 0;

if (btnProximo && btnAnterior && sliderNoticias) {
    btnProximo.addEventListener("click", () => {
        posicao -= 375;
        sliderNoticias.style.transform = `translateX(${posicao}px)`;
    });

    btnAnterior.addEventListener("click", () => {
        if (posicao < 0) {
            posicao += 375;
        }
        sliderNoticias.style.transform = `translateX(${posicao}px)`;
    });
}

document.addEventListener("click", function(evento) {
    if (evento.target.classList.contains('btn-tamanho') || evento.target.classList.contains('button-tamanho')) {
        const botaoClicado = evento.target;
        const container = botaoClicado.closest('.tamanhos-container');
        
        if (container) {
            if (botaoClicado.classList.contains('selecionado')) {
                botaoClicado.classList.remove('selecionado');
            } 
            else {
                container.querySelectorAll('button').forEach(b => {
                    b.classList.remove('selecionado');
                });
                botaoClicado.classList.add('selecionado');
            }
        }
    }
});

function abrirCarrinho(botao) {
    const popupCarrinho = document.getElementById('popup-carrinho');
    const txtNomeProduto = document.getElementById('nome-produto-carrinho');
    const txtTamanhoProduto = document.getElementById('tamanho-produto-carrinho');
    
    const card = botao.closest('.card-produto');
    
    if (card && popupCarrinho && txtNomeProduto && txtTamanhoProduto) {
        const nomeProduto = card.querySelector('h3').innerText;
        
        // Procura por um botão que tenha a classe 'selecionado' dentro desse card
        const tamanhoSelecionado = card.querySelector('.selecionado');
        
        if (!tamanhoSelecionado) {
            alert("Por favor, selecione um tamanho antes de adicionar ao carrinho!");
            return; 
        }
        
        txtNomeProduto.innerText = nomeProduto;
        txtTamanhoProduto.innerText = tamanhoSelecionado.innerText;
        popupCarrinho.style.display = 'flex';
    }
}

function fecharCarrinho() {
    const popupCarrinho = document.getElementById('popup-carrinho');
    if (popupCarrinho) {
        popupCarrinho.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const popupCarrinho = document.getElementById('popup-carrinho');
    if (popupCarrinho) {
        window.addEventListener('click', (evento) => {
            if (evento.target === popupCarrinho) {
                fecharCarrinho();
            }
        });
    }
});