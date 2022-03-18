var jogador1 = {
    nome: "Fillipe",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var jogador2 = {
    nome: "Aléxia",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
  }
  
  jogador1.pontos = calculaPontos(jogador1);
  jogador2.pontos = calculaPontos(jogador2);
  var jogadores = [jogador1, jogador2];
  console.log(jogadores);
  function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento += "<tr><td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  exibeJogadoresNaTela(jogadores);
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
  }
  // 1 - Fazer a lógica de quando houver um empate, obrigatoriamente deveria já ajustar como empate para os demais jogadores.
  // 2 - Validar se todos os pontos estão fazendo sentido, tanto o número de empates, quanto derrotas e vitôrias com os demais jogadores (imporssível haver mais derrotas que vitórias, por exemplo).
  // 3 - Adicionar a imagem de cada jogador.
  // 4 - Criar um botão para zerar todos os pontos.
  // 5 - Criar um botão e inputs (Campos de texto) para adicionar novos jogadores, com seus respectivos dados.
  // 6 - Utilize seu jogo preferido para se basear na pontuação da sua tabela de classificação.
  