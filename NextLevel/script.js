const todasAsNoticias = document.querySelectorAll('.noticia');

todasAsNoticias.forEach(noticia => {
    const botaoCurtir = noticia.querySelector('.btn-curtir');
    const contadorCurtidas = noticia.querySelector('.contador-curtidas');

    if (botaoCurtir && contadorCurtidas) {
        let numeroCurtidas = 0;

        botaoCurtir.addEventListener('click', () => {
            numeroCurtidas = numeroCurtidas + 1;
            contadorCurtidas.textContent = numeroCurtidas + ' curtidas';
            botaoCurtir.style.color = "#00e6ff";
        });
    }
});


const btnMomento = document.getElementById('btn-momento');
const btnNostalgicos = document.getElementById('btn-nostalgicos');
const logo = document.querySelector('.logo');

function filtrarJogos(categoriaQueFica) {
    const secaoMomento = document.getElementById('momento');
    const secaoNostalgicos = document.getElementById('nostalgicos');

    if (!secaoMomento || !secaoNostalgicos) return;

    if (categoriaQueFica === 'todos') {
        secaoMomento.classList.remove('escondido');
        secaoNostalgicos.classList.remove('escondido');
    } 
    else if (categoriaQueFica === 'momento') {
        secaoMomento.classList.remove('escondido');
        secaoNostalgicos.classList.add('escondido');
    } 
    else if (categoriaQueFica === 'nostalgicos') {
        secaoMomento.classList.add('escondido');
        secaoNostalgicos.classList.remove('escondido');
    }
}

btnMomento.addEventListener('click', (event) => {
    event.preventDefault();
    filtrarJogos('momento');
});

btnNostalgicos.addEventListener('click', (event) => {
    event.preventDefault();
    filtrarJogos('nostalgicos');
});

logo.addEventListener('click', (event) => {
    event.preventDefault();
    filtrarJogos('todos');
});



const btnTema = document.getElementById('btn-tema');
const corpoDaPagina = document.body;
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'claro') {
    corpoDaPagina.classList.add('modo-claro');
    btnTema.textContent = '☀️'; 
}

btnTema.addEventListener('click', () => {

    corpoDaPagina.classList.toggle('modo-claro');
    
    if (corpoDaPagina.classList.contains('modo-claro')) {
        btnTema.textContent = '☀️';
        localStorage.setItem('tema', 'claro'); 
    } else {
        btnTema.textContent = '🌙';
        localStorage.setItem('tema', 'escuro'); 
    }
});
    

const btnCortina = document.getElementById('btn-cortina')
const menuLinks = document.getElementById('links-cortina')

btnCortina.addEventListener('click', (event) => {
    event.stopPropagation();

    menuLinks.classList.toggle('cortina-fechada')
    menuLinks.classList.toggle('cortina-aberta')
});

document.addEventListener('click', () => {
    if (menuLinks.classList.contains('cortina-aberta')) {
        menuLinks.classList.add('cortina-fechada');
        menuLinks.classList.remove('cortina-aberta');
    }
});

