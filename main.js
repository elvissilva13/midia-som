function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio);

   if(elemento && elemento.localName === 'audio'){
     elemento.play();
   } 
   else{
        console.log('Elemento não encontrado ou seletor inválido.')
   }
}
const ListaDeTeclas = document.querySelectorAll('.tecla');

// para
for(let contador= 0; contador < ListaDeTeclas.length; contador++) {
    const teclas = ListaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio =`#som_${instrumento}`;//template string

    ListaDeTeclas[contador].onclick =function (){
        tocaSom(idAudio);
    }
    teclas.onkeydown = function (evento){

       if(evento.code === 'Space' || evento.code === 'Enter'){ 
        teclas.classList.add('ativa');
       }

    }

    teclas.onkeyup = function (){
        teclas.classList.remove('ativa');
    }
 
}