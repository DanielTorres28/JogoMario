/*passando a class .mario do css*/
const mario = document.querySelector('.mario');

/*passando a class .pipe do css*/
const pipe = document.querySelector('.pipe');

/*function CriarPlacar(){
const placar = {
        pontuacao: 0,
        pipe(){
        contexto.font = '30px serif';
        contexto.textAlign = 'right'
        contexto.fillStyle= 'black';
        contexto.fillText(`Pontuação ${placar.pontuacao}`, canvas.width - 35, 35);
        }
    }
    return placar;
}*/


/*adicionando a class do mario*/
const jump = () =>{
mario.classList.add('jump');

/*função que recebe dois parametros*/
/*ou seja vai receber uma função e um tempo de 500ms*/ 
setTimeout(() => {
    /*vai remover a classe do .mario*/
    mario.classList.remove('jump');
},500);
}

/*loop do jogo que vai saber se perdeu ou não*/
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    /*pega o estilo que foi computado na imagem no mario*/
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    
    /*se o pipePosition for menor ou igual a 120px, quer dizer que aqui ele para o jogo + se a posição do pipe é maior que zero quer dizer que o mario passou do tubo+ se a altura do mario for menor que 80 então o mario bateu e acaba o jogo*/
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        /*parando a animação do tubo*/
        pipe.style.animation = 'none';
        /*Ele vai parar realmente nesta posição*/
        pipe.style.left = `${pipePosition}px`;
        
        /*parando a animação do mario*/
        mario.style.animation = 'none';
        /*Ele vai parar realmente nesta posição*/
        mario.style.bottom = `${marioPosition}px`;

        /*inserindo e editando a imagem do game over*/
        mario.src='./imagens/bowser.png';
        mario.style.width ='175px';
        mario.style.marginLeft = '50px';
        
        /*limpando o loop*/
        clearInterval(loop);
    }
}, 10);


/*função para efetuar o jump*/
document.addEventListener('keydown', jump);