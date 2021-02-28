# marvellouspongclone

<p align="center">![Captura de tela do jogo.](/assets/imagens/screenshot.png)</p>

### Objetivo
Esse projeto faz parte do curso "Jogos Clássicos - Parte 1" da formação "Iniciante em Programação" da Alura.
O objetivo era fazer um jogo similar ao clássico jogo Pong. Seguindo os passos do curso era possível chegar em uma versão que lembrava um pouco o jogo original, mas o resultado não me satisfez tanto e eu fiz alguns ajustes e modificações pra chegar em um resultado final o mais próximo possível do original.

### Considerações Finais
O jogo ainda tem duas coisas que não me deixaram tão satisfeito.
- Há um *bug* quando a bola atinge exatamente o canto da raquete, isso faz com que ela fique presa nesse canto e o único modo de retira-la é fazendo ela colidir com a borda. Isso provavelmente é resultado do modo que a colisão é verificada. Como no curso utilizamos a *library* (p5.collide2D)[https://github.com/bmoren/p5.collide2D], não há muito o que fazer quanto a isso. Talvez no futuro eu modifique a verificação de colisão com um algoritmo diferente e teste se o *bug* continua ocorrendo.
- O modo como a raquete oponente se comporta. Seguindo os passos do curso o comportamento da raquete oponente ficou extremamente básico, o que já me deixou bem descontente. Nos passos finais eles tentam melhorar isso inserindo uma função que supostamente adiciona uma chance do oponente errar. Infelizmente, a função só funciona com o código original seguindo o passo a passo do curso. Por isso, tentei fazer minha própria modificação para o modo como o oponente se comporta. A versão final funciona decentemente bem, mas acho que ainda tem espaço pra melhorias.

### *Librarys*
- (p5.js)[https://p5js.org/]
    - (p5.collide2D)[https://github.com/bmoren/p5.collide2D]