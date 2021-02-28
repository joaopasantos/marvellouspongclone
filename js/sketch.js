function setup() {
  var myCanvas = createCanvas(600, 400);
  myCanvas.center();
  preload();
  somColisao.setVolume(0.10);
  somPonto.setVolume(0.05);
}

function draw() {
  background(0);
  mostraPlacar();
  desenhaDivisoria();
  
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
  desenhaBolinha();
  
  
  movimentaBolinha();
  movimentaRaquete();
  movimentaRaqueteOponente();
  
  verificaColisaoBorda();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  marcaPonto();
}


function desenhaDivisoria() {
  var alturaRetangulo = 7;
  var larguraRetangulo = 5;
  for (var y = 0; y < height; y += alturaRetangulo * 2) {
    rect(width / 2, y, larguraRetangulo, alturaRetangulo);
  }
}