# marvellouspongclone

<p align="center"><img src="https://github.com/joaopasantos/marvellouspongclone/blob/master/assets/imagens/screenshot.png" alt="Captura de tela do jogo."></p>

Versão online para jogar: <a href="https://joaopasantos.github.io/marvellouspongclone/" title="marvellouspongclone Github.io page">marvellouspongclone</a> 

**P.S.:** O console apresentará algumas mensagens de erro referentes à execução do jogo. Isso se dá por um problema na *library* <a href="https://p5js.org/" title="p5.js Homepage">p5.js</a>, que foi documentado nessa *thread* <a href="https://github.com/processing/p5.js-sound/issues/506#issue-672976731" title="p5.js Issue#506">p5.js Issue#506</a>. Apesar dessas mensagens o jogo e os sons funcionam corretamente.  

## Objetivo
Esse projeto faz parte do curso "Jogos Clássicos - Parte 1" da formação "Iniciante em Programação" da Alura.  
O objetivo era fazer um jogo similar ao clássico jogo Pong. Seguindo os passos do curso era possível chegar em uma versão que lembrava um pouco o jogo original, mas o resultado não me satisfez tanto e eu fiz alguns ajustes e modificações pra chegar em um resultado final o mais próximo possível do original.  

## Considerações Finais
O jogo ainda tem duas coisas que não me deixaram tão satisfeito.
- Há um *bug* quando a bola atinge exatamente o canto da raquete, isso faz com que ela fique presa nesse canto e o único modo de retira-la é fazendo ela colidir com a borda. Isso provavelmente é resultado do modo que a colisão é verificada. Como no curso utilizamos a *library* <a href="https://github.com/bmoren/p5.collide2D" title="p5.collide2D Github page">p5.collide2D</a>, não há muito o que fazer quanto a isso. Talvez no futuro eu modifique a verificação de colisão com um algoritmo diferente e teste se o *bug* continua ocorrendo.
- O modo como a raquete oponente se comporta. Seguindo os passos do curso o comportamento da raquete oponente ficou extremamente básico, o que já me deixou bem descontente. Nos passos finais eles tentam melhorar isso inserindo uma função que supostamente adiciona uma chance do oponente errar. Infelizmente, a função só funciona com o código original seguindo o passo a passo do curso. Por isso, tentei fazer minha própria modificação para o modo como o oponente se comporta. A versão final funciona decentemente bem, mas acho que ainda tem espaço pra melhorias.

### *Librarys*
- <a href="https://p5js.org/" title="p5.js Homepage">p5.js</a>
    - <a href="https://github.com/bmoren/p5.collide2D" title="p5.collide2D Github page">p5.collide2D</a>