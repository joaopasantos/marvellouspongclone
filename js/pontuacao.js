// Variáveis do Placar
var meusPontos = 0;
var pontosDoOponente = 0;

function mostraPlacar() {
  fill(255);
  textAlign(CENTER)
  textFont(fontePlacar);
  textSize(40);
  text(meusPontos, 175, 55);
  text(pontosDoOponente, 425, 55);
}

function marcaPonto() {
  if (xBolinha < raio) {
    pontosDoOponente += 1;
    somPonto.play();
  }
  if (xBolinha > width - raio) {
    meusPontos += 1;
    somPonto.play();
  }
}