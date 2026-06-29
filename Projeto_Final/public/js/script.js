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


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.read-more-btn-cards').forEach(button => {
    button.addEventListener('click', function() {
      // Encontra o card pai mais próximo que tem a classe .cards
      const card = this.closest('.cards');
      
      if (card) {
        // Alterna a classe 'expanded' no card
        card.classList.toggle('expanded');
        
        // Altera o texto do botão para o usuário saber que pode fechar
        if (card.classList.contains('expanded')) {
          this.textContent = 'Ler menos';
        } else {
          this.textContent = 'Ler mais';
        }
      }
    });
  });
});


// --- CONTROLE DE NAVEGAÇÃO DA LINHA DO TEMPO HORIZONTAL ---
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("timeline-scroll-area");
  const btnEsq = document.getElementById("seta-esq");
  const btnDir = document.getElementById("seta-dir");

  // Verifica se os elementos realmente existem na página atual antes de aplicar
  if (container && btnEsq && btnDir) {
    
    // Define quantos pixels ele vai andar a cada clique (ajuste se quiser mais rápido ou devagar)
    const distanciaClique = 300; 

    btnDir.addEventListener("click", () => {
      container.scrollLeft += distanciaClique;
    });

    btnEsq.addEventListener("click", () => {
      container.scrollLeft -= distanciaClique;
    });
  }
});

// Base de dados com as informações de cada conquista
const dadosCopas = {
    "1958": {
        titulo: "Copa do Mundo 1958",
        sede: "Suécia",
        placar: "Brasil 5 x 2 Suécia",
        destaques: "Pelé estreando com apenas 17 anos, a genialidade de Garrincha e Vavá que comandou as redes na grande final.",
        foto: "/images/historia-copa1958.jpg"
    },
    "1962": {
        titulo: "Copa do Mundo 1962",
        sede: "Chile",
        placar: "Brasil 3 x 1 Checoslováquia",
        destaques: "Garrincha assumiu a liderança após a lesão de Pelé, acompanhado por Amarildo 'O Possesso' e o gênio Amaral.",
        foto: "/images/historia-copa1962.jpg"
    },
    "1970": {
        titulo: "Copa do Mundo 1970",
        sede: "México",
        placar: "Brasil 4 x 1 Itália",
        destaques: "O ápice do futebol arte. Esquadrão lendário com Pelé, Tostão, Jairzinho (o Furacão da Copa), Rivellino e Carlos Alberto Torres.",
        foto: "/images/historia-copa1970.jpg"
    },
    "1994": {
        titulo: "Copa do Mundo 1994",
        sede: "Estados Unidos",
        placar: "Brasil 0 (3) x (2) 0 Itália (Pênaltis)",
        destaques: "O fim do jejum de 24 anos sustentado pela dupla histórica Romário e Bebeto, além da liderança imponente do capitão Dunga.",
        foto: "/images/historia-copa1994.jpg"
    },
    "2002": {
        titulo: "Copa do Mundo 2002",
        sede: "Coreia do Sul e Japão",
        placar: "Brasil 2 x 0 Alemanha",
        destaques: "A redenção perfeita do Fenômeno Ronaldo marcando dois gols na final, a maestria de Rivaldo e Ronaldinho Gaúcho nos '3Rs'.",
        foto: "/images/historia-copa2002.jpg"
    }
};

// Captura os elementos do DOM
const itensTaca = document.querySelectorAll('.taca-item');
const elPainel = document.getElementById('painel-copa');
const elFoto = document.getElementById('copa-foto');
const elTitulo = document.getElementById('copa-titulo');
const elSede = document.getElementById('copa-sede');
const elPlacar = document.getElementById('copa-placar');
const elDestaques = document.getElementById('copa-destaques');

// Adiciona o evento para cada taça
itensTaca.forEach(taca => {
    taca.addEventListener('mouseenter', () => {
        // 1. Remove classe ativa dos outros
        itensTaca.forEach(item => item.classList.remove('active'));
        // 2. Adiciona classe ativa na taça atual
        taca.classList.add('active');

        // 3. Pega o ano correspondente no atributo data-ano
        const ano = taca.getAttribute('data-ano');
        const infos = dadosCopas[ano];

        // 4. Aplica um efeito suave de piscar ao trocar de dados
        elPainel.style.opacity = 0.4;
        
        setTimeout(() => {
            elFoto.src = infos.foto;
            elFoto.alt = infos.titulo;
            elTitulo.innerText = infos.titulo;
            elSede.innerText = infos.sede;
            elPlacar.innerText = infos.placar;
            elDestaques.innerText = infos.destaques;
            
            elPainel.style.opacity = 1;
        }, 150);
    });
});