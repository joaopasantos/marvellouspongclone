// Variáveis da Bolinha
var xBolinha = 600/2;
var yBolinha = 400/2;
var diametro = 10;
var raio = diametro / 2;
//// Velocidade
var velocidade = 4;
var velocidadeXBolinha = velocidade;
var velocidadeYBolinha = velocidade;

// Funções da Bolinha
function desenhaBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio >= width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio >= height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}