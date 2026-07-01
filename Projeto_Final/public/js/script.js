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

    const cards = document.querySelectorAll(".card-noticia");

    const larguraCard = 375;

    // quantidade máxima que pode andar
    const limite = (cards.length - 3) * larguraCard;

    btnProximo.addEventListener("click", () => {

        if (Math.abs(posicao) < limite) {

            posicao -= larguraCard;

            sliderNoticias.style.transform =
                `translateX(${posicao}px)`;
        }

    });

    btnAnterior.addEventListener("click", () => {

        if (posicao < 0) {

            posicao += larguraCard;

            sliderNoticias.style.transform =
                `translateX(${posicao}px)`;
        }

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

// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    const galeriaContainer = document.querySelector('.galeria-titulos-container');

    // Configuração do observador de scroll
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            // Se o container estiver visível na tela
            if (entrada.isIntersecting) {
                galeriaContainer.classList.add('scroll-animado');
                // Opcional: para a animação acontecer só uma vez, descomente a linha abaixo
                // observador.unobserve(entrada.target);
            } else {
                // Se quiser que ela suma de novo ao subir o scroll, mantenha esta linha:
                galeriaContainer.classList.remove('scroll-animado');
            }
        });
    }, {
        threshold: 0.15 // Dispara a animação quando 15% da galeria aparecer na tela
    });

    // Ativa a vigilância no elemento escolhido
    if (galeriaContainer) {
        observador.observe(galeriaContainer);
    }
});

// ==========================================
// MÓDULO 2: GALERIA COPA AMÉRICA
// ==========================================

// Base de dados para a Copa América
const dadosAmerica = {
    "1919": {
        titulo: "Copa América 1919",
        sede: "Brasil",
        placar: "Brasil 1 x 0 Uruguai",
        destaques: "Primeiro título oficial da história da Seleção Brasileira. Gol lendário de Arthur Friedenreich na prorrogação.",
        foto: "/images/historia-america1919.jpg"
    },
    "1922": {
        titulo: "Copa América 1922",
        sede: "Brasil",
        placar: "Brasil 3 x 0 Paraguai",
        destaques: "Bicampeonato conquistado nas Laranjeiras celebrando o Centenário da Independência do Brasil.",
        foto: "/images/historia-america1922.jpg"
    },
    "1949": {
        titulo: "Copa América 1949",
        sede: "Brasil",
        placar: "Brasil 7 x 0 Paraguai",
        destaques: "Uma das campanhas mais avassaladoras da história, com goleada histórica no jogo desempate da final.",
        foto: "/images/historia-america1949.jpg"
    },
    "1989": {
        titulo: "Copa América 1989",
        sede: "Brasil",
        placar: "Brasil 1 x 0 Uruguai",
        destaques: "Fim de um jejum de 40 anos no torneio continental, com gol decisivo de Romário no Maracanã lotado.",
        foto: "/images/historia-america1989.jpg"
    },
    "1997": {
        titulo: "Copa América 1997",
        sede: "Bolívia",
        placar: "Brasil 3 x 1 Bolívia",
        destaques: "Primeiro título fora de casa na altitude boliviana. Consagração de Ronaldo Fenômeno e o famoso desabafo de Zagallo: 'Vocês vão ter que me engolir!'.",
        foto: "/images/historia-america1997.jpg"
    },
    "1999": {
        titulo: "Copa América 1999",
        sede: "Paraguai",
        placar: "Brasil 3 x 0 Uruguai",
        destaques: "Show da dupla Rivaldo e Ronaldinho Gaúcho (marcando seu antológico gol com elástico sobre a Venezuela).",
        foto: "/images/historia-america1999.jpg"
    },
    "2004": {
        titulo: "Copa América 2004",
        sede: "Peru",
        placar: "Brasil 2 (4) x (2) 2 Argentina",
        destaques: "Gol milagroso de Adriano Imperador nos acréscimos do segundo tempo seguido por vitória épica nos pênaltis.",
        foto: "/images/historia-america2004.jpeg"
    },
    "2007": {
        titulo: "Copa América 2007",
        sede: "Venezuela",
        placar: "Brasil 3 x 0 Argentina",
        destaques: "Com um time considerado azarão, o Brasil goleou a Argentina de Messi na final com grande atuação de Júlio Baptista.",
        foto: "/images/historia-america2007.jpg"
    },
    "2019": {
        titulo: "Copa América 2019",
        sede: "Brasil",
        placar: "Brasil 3 x 1 Peru",
        destaques: "Nono título conquistado no Maracanã com protagonismo de Everton Cebolinha e grande consistência defensiva.",
        foto: "/images/historia-america2019.jpg"
    }
};

// Mapeamento dos elementos do HTML da Copa América
const itensAmerica = document.querySelectorAll('[data-america]');
const painelAmerica = document.getElementById('painel-america');
const fotoAmerica = document.getElementById('america-foto');
const tituloAmerica = document.getElementById('america-titulo');
const sedeAmerica = document.getElementById('america-sede');
const placarAmerica = document.getElementById('america-placar');
const destaquesAmerica = document.getElementById('america-destaques');

// Lógica de Mouseover / Hover para a Copa América
itensAmerica.forEach(taca => {
    taca.addEventListener('mouseenter', () => {
        // Remove a classe ativa de todas as taças da América antes de ativar a nova
        itensAmerica.forEach(item => item.classList.remove('active'));
        taca.classList.add('active');

        const ano = taca.getAttribute('data-america');
        const infos = dadosAmerica[ano]; // Aqui estava o perigo: ler dadosAmerica!

        if (infos) {
            // Efeito de transição suave de opacidade
            painelAmerica.style.opacity = 0.4;
            
            setTimeout(() => {
                fotoAmerica.src = infos.foto;
                fotoAmerica.alt = infos.titulo;
                tituloAmerica.innerText = infos.titulo;
                sedeAmerica.innerText = infos.sede;
                placarAmerica.innerText = infos.placar;
                destaquesAmerica.innerText = infos.destaques;
                painelAmerica.style.opacity = 1;
            }, 150);
        }
    });
});


// ==========================================
// INTEGRAÇÃO DO COMPORTAMENTO DE SCROLL (IntersectionObserver)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Captura os dois containers simultaneamente
    const containersAnima = document.querySelectorAll('.galeria-titulos-container');

    const observadorGeral = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('scroll-animado');
            } else {
                entrada.target.classList.remove('scroll-animado');
            }
        });
    }, {
        threshold: 0.10 // Dispara quando 10% do bloco entra na tela visual do usuário
    });

    // Coloca o detector para rodar em ambos os painéis (Copa e América)
    containersAnima.forEach(container => {
        if (container) {
            observadorGeral.observe(container);
        }
    });
});

// ==========================================
// MÓDULO 3: GALERIA COPA AMÉRICA FEMININA
// ==========================================

const dadosFeminina = {
    "1991": {
        titulo: "Copa América Feminina 1991",
        sede: "Brasil",
        placar: "Campeãs Invictas (Triangular Final)",
        destaques: "A edição inaugural do campeonato continental. O Brasil dominou completamente o torneio e carimbou o passaporte para o primeiro Mundial da história.",
        foto: "/images/historia-fem1991.webp"
    },
    "1995": {
        titulo: "Copa América Feminina 1995",
        sede: "Brasil",
        placar: "Brasil 2 x 0 Argentina",
        destaques: "Bicampeonato incontestável jogando em Uberlândia, sacramentando a soberania com vitória clássica sobre a Argentina na final.",
        foto: "/images/historia-fem1995.webp"
    },
    "1998": {
        titulo: "Copa América Feminina 1998",
        sede: "Argentina",
        placar: "Brasil 7 x 1 Argentina",
        destaques: "Primeiro título fora de casa com uma goleada histórica e acachapante sobre as donas da casa na grande final. Campanha avassaladora.",
        foto: "/images/historia-fem1998.jpg"
    },
    "2003": {
        titulo: "Copa América Feminina 2003",
        sede: "Peru, Equador e Argentina",
        placar: "Líderes isoladas do quadrangular final",
        destaques: "O tetracampeonato contou com o surgimento brilhante de Marta e Cristiane, iniciando uma era de ouro histórica para o futebol feminino.",
        foto: "/images/historia-fem2003.jpg"
    },
    "2010": {
        titulo: "Copa América Feminina 2010",
        sede: "Equador",
        placar: "100% de aproveitamento no quadrangular",
        destaques: "O Brasil reconquistou o topo da América com direito a show de gols da atacante Marta, eleita a melhor do mundo no mesmo período.",
        foto: "/images/historia-fem2010.jpg"
    },
    "2014": {
        titulo: "Copa América Feminina 2014",
        sede: "Equador",
        placar: "Brasil 0 x 0 Colômbia (Vantagem na fase final)",
        destaques: "Hexacampeonato conquistado na raça e com solidez defensiva, consolidando o domínio completo das brasileiras na América do Sul.",
        foto: "/images/historia-fem2014.jpg"
    },
    "2018": {
        titulo: "Copa América Feminina 2018",
        sede: "Chile",
        placar: "Brasil 3 x 0 Colômbia (Jogo decisivo)",
        destaques: "Heptacampeonato com 100% de aproveitamento (7 vitórias em 7 jogos). Uma campanha impecável comandada por Formiga, Marta e Bia Zaneratto.",
        foto: "/images/historia-fem2018.jpg"
    },
    "2022": {
        titulo: "Copa América Feminina 2022",
        sede: "Colômbia",
        placar: "Brasil 1 x 0 Colômbia",
        destaques: "O oitavo título veio com uma campanha perfeita: campeãs invictas e SEM SOFRER NENHUM GOL durante todo o campeonato. Gol do título marcado por Debinha.",
        foto: "/images/historia-fem2022.webp"
    },
    "2025": {
        titulo: "Copa América Feminina 2025",
        sede: "Equador",
        placar: "Brasil Campeão (Fase Final)",
        destaques: "O nono título consolidou a hegemonia absoluta das Guerreiras do Brasil no continente sul-americano, garantindo vaga direta para as próximas competições globais.",
        foto: "/images/historia-fem2025.jpg"
    }
};

// Elementos da Copa América Feminina
const itensFeminina = document.querySelectorAll('[data-feminina]');
const painelFeminina = document.getElementById('painel-feminina');
const fotoFeminina = document.getElementById('feminina-foto');
const tituloFeminina = document.getElementById('feminina-titulo');
const sedeFeminina = document.getElementById('feminina-sede');
const placarFeminina = document.getElementById('feminina-placar');
const destaquesFeminina = document.getElementById('feminina-destaques');

// Lógica de Hover para a Copa América Feminina
itensFeminina.forEach(taca => {
    taca.addEventListener('mouseenter', () => {
        itensFeminina.forEach(item => item.classList.remove('active'));
        taca.classList.add('active');

        const ano = taca.getAttribute('data-feminina');
        const infos = dadosFeminina[ano];

        if (infos) {
            painelFeminina.style.opacity = 0.4;
            
            setTimeout(() => {
                fotoFeminina.src = infos.foto;
                fotoFeminina.alt = infos.titulo;
                tituloFeminina.innerText = infos.titulo;
                sedeFeminina.innerText = infos.sede;
                placarFeminina.innerText = infos.placar;
                destaquesFeminina.innerText = infos.destaques;
                painelFeminina.style.opacity = 1;
            }, 150);
        }
    });
});

