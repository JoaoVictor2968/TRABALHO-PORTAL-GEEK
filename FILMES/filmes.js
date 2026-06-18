const noticias = [
  {
    titulo:"Supergirl ganha trailer final antes da estreia",
    texto:"A DC Studios divulgou o trailer final de Supergirl: Woman of Tomorrow.",
    imagem:"img/supergirl.jpg",
  },

  {
    titulo:"Toy Story 5 está entre os filmes mais aguardados do mês",
    texto:"A nova aventura dos brinquedos da Pixar chega aos cinemas.",
    imagem:"img/toy-story-5.jpg",
  },

  {
    titulo:"Avatar: O Último Mestre do Ar retorna à Netflix",
    texto:"A segunda temporada da adaptação em live-action está entre os lançamentos mais aguardados.",
    imagem:"img/avatar.jpg",
  },

  {
    titulo:"Netflix amplia catálogo com Rocky e Creed",
    texto:"As franquias Rocky e Creed chegaram ao catálogo da plataforma.",
    imagem:"img/rocky.jpg",
  },

  {
    titulo:"Novo filme de Steven Spielberg estreia nos cinemas",
    texto:"Disclosure Day já está em cartaz em diversos países.",
    imagem:"img/spielberg.jpg",
  },

  {
    titulo:"DC aposta em nova fase do universo cinematográfico",
    texto:"Após Superman, a DC prepara a chegada de Supergirl.",
    imagem:"img/dc-universe.jpg",
  },

  {
   titulo:"House of the Dragon segue entre as séries mais assistidas",
   texto:"A produção da HBO continua atraindo milhões de espectadores e mantém forte presença nas redes sociais.",
   imagem:"img/house-of-the-dragons.jpg",
 },

 {
   titulo:"The Last of Us mantém sucesso entre fãs e crítica",
   texto:"A adaptação do famoso jogo permanece entre as produções mais comentadas do streaming.",
   imagem:"img/the-last-of-us.jpg",
 },

 {
   titulo:"Wandinha prepara novos mistérios para próxima temporada",
   texto:"A Netflix revelou novidades sobre os próximos episódios da série estrelada por Jenna Ortega.",
   imagem:"img/wandinha.jpg",
 },

 {
   titulo:"Invencível conquista público com nova temporada",
   texto:"A animação baseada nos quadrinhos segue recebendo elogios pela narrativa madura.",
   imagem:"img/invencivel.jpg",
 },

 {
   titulo:"Lanterns aumenta expectativas dos fãs da DC",
   texto:"A série dos Lanternas Verdes é uma das apostas mais aguardadas para os próximos meses.",
   imagem:"img/lanternas.jpg",
 },

 {
   titulo:"The Bear permanece entre os destaques do streaming",
   texto:"A série culinária continua acumulando elogios por seu roteiro e atuações.",
   imagem:"img/the-bear.jpg",
 },

 {
   titulo:"Duna: Parte Três domina expectativas para o cinema",
   texto:"A continuação da saga de Paul Atreides já aparece entre os filmes mais aguardados pelos fãs.",
   imagem:"img/duna.jpg",
 },

 {
   titulo:"Rick and Morty retorna com episódios inéditos",
   texto:"A animação adulta continua entre os maiores sucessos do gênero.",
   imagem:"img/rick-and-morty.jpg",
 },

 {
   titulo:"Mestres do Universo volta ao centro das atenções",
   texto:"A clássica franquia de He-Man ganha novos projetos para cinema e televisão.",
   imagem:"img/mestres-do-universo.jpg",
 },

 {
   titulo:"Vox Machina amplia popularidade das animações adultas",
   texto:"A série inspirada em Critical Role segue conquistando novos espectadores.",
   imagem:"img/vox-machina.jpg",
 },

 {
   titulo:"Harry Potter recebe nova adaptação televisiva",
   texto:"O universo bruxo retorna em formato de série com promessa de maior fidelidade aos livros.",
   imagem:"img/harry-potter.jpg",
 },

 {
   titulo:"Produções baseadas em videogames continuam em alta",
   texto:"Após sucessos recentes, estúdios investem cada vez mais em adaptações de jogos.",
   imagem:"img/games-series.jpg",
 },

 {
  titulo:"Ted Lasso retorna com nova temporada em 2026",
  texto:"A série de comédia esportiva volta ao streaming após um longo período afastada das telas.",
  imagem:"img/ted-lasso.jpg",
 },

 {
  titulo:"Blade Runner 2099 expande universo da franquia",
  texto:"A nova produção promete explorar novos mistérios do futuro distópico criado por Ridley Scott.",
  imagem:"img/blade-runner-2099.jpg",
 },

 {
  titulo:"Spider-Noir leva universo do Homem-Aranha para a TV",
  texto:"A série estrelada por Nicolas Cage figura entre os projetos mais comentados do ano.",
  imagem:"img/spider-noir.jpg",
 },

 {
  titulo:"Star Trek apresenta nova geração de cadetes",
  texto:"A franquia ganha reforço com Star Trek: Academia da Frota Estelar.",
  imagem:"img/star-trek-academia.jpg",
 },

 {
  titulo:"Cangaço Novo retorna com episódios inéditos",
  texto:"A produção brasileira continua sendo uma das apostas nacionais mais aguardadas.",
  imagem:"img/cangaco-novo.jpg",
 },

 {
  titulo:"Os Outros prepara novos conflitos na terceira temporada",
  texto:"A série brasileira amplia sua narrativa com novos personagens e desafios.",
  imagem:"img/os-outros.jpg",
 },

 {
  titulo:"Homem-Aranha ganha novo filme para os cinemas",
  texto:"Spider-Man: Brand New Day promete iniciar uma nova fase para o herói nas telonas.",
  imagem:"img/spider-man-bnd.jpg",
 },

 {
  titulo:"Clayface surge como aposta diferente da DC",
  texto:"O longa focado no vilão promete misturar terror e super-heróis em uma abordagem inédita.",
  imagem:"img/clayface.jpg",
 },

 {
  titulo:"Todo Mundo em Pânico 6 marca retorno da franquia",
  texto:"A clássica série de comédia e paródia volta aos cinemas após mais de uma década.",
  imagem:"img/todo-mundo-em-panico-6.jpg",
 },

 {
  titulo:"The Odyssey coloca Christopher Nolan novamente em destaque",
  texto:"A adaptação da obra clássica de Homero está entre os projetos cinematográficos mais comentados de 2026.",
  imagem:"img/a-odisseia.jpg",
 },

];

function exibirData() {
  document.getElementById("data-atual").textContent =
    new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
}

function gerarNoticias() {
  const copia = [...noticias];

  copia.sort(() => Math.random() - 0.5);

  const manchete = copia[0];

  document.getElementById("manchete-principal").innerHTML = `
<span class="tag">
DESTAQUE
</span>

<h2>
${manchete.titulo}
</h2>

<p>
${manchete.texto}
</p>
`;

  let cards = "";

  for (let i = 1; i < 6; i++) {
    cards += `
<div class="card">

    <img
        src="${copia[i].imagem}"
        alt="${copia[i].titulo}"
    >

    <h3>${copia[i].titulo}</h3>

    <p>${copia[i].texto}</p>

</div>
`;
  }

  document.getElementById("ultimas-noticias").innerHTML = cards;
}

document.addEventListener("DOMContentLoaded", () => {
  exibirData();

  gerarNoticias();

  document.getElementById("btn-gerar").addEventListener("click", gerarNoticias);

  const menu = document.getElementById("cortina");
  const botao = document.getElementById("abrir-menu");

  botao.addEventListener("click", () => {
    menu.classList.toggle("aberta");
  });

});
