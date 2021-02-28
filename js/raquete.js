// Variáveis das Raquetes
// Minha
var raqueteComprimento = 7.5;
var raqueteAltura = 40;
var xRaquete = 30;
var yRaquete = 200 - raqueteAltura / 2;
// Oponente
var xRaqueteOponente = 600 - raqueteComprimento - xRaquete;
var yRaqueteOponente = 200 - raqueteAltura / 2;
var velocidadeYOponente;
var manipulaMovimento = 15;
var chanceDeErrar = 0;

// Funções das Raquetes
// Minha
function desenhaRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    if (yRaquete > 0) {
      yRaquete -= 5;
    }
  } else if (keyIsDown(DOWN_ARROW)) {
    if (yRaquete + raqueteAltura < height) {
      yRaquete += 5;
    }
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteAltura / 2 - manipulaMovimento;
  yRaqueteOponente += velocidadeYOponente*0.12;
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    somColisao.play();
  }
}