var somColisao;
var somPonto;
var fontePlacar;

function preload() {
  fontePlacar = loadFont('assets/fonte/pong-score.ttf');
  
  somColisao = loadSound('assets/sons/colisao.ogg');
  somPonto = loadSound('assets/sons/ponto.ogg');
  }