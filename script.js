let quadradinhos = document.querySelectorAll("div");
let resposta = document.querySelector("h2");
let botao = document.querySelector("button");

//CRIANDO LISTA DE CORES
let cores = ["red", "blue", "yellow"];


//FUNÇÃO PARA GERAR CORES ALEATORIAS
function gerarCor(){
    let aleatorio = Math.floor(Math.random()* cores.length);
    //o THIS está sendo utilizando para se referenciar ao próprio elemento em que está sendo clicado
    this.style.backgroundColor = cores[aleatorio];

    //chamando a função de verificar final, para verificar somente quando gerar uma cor
    verificarFinal();
}
//Aplicando a função à todos os quadradinhos
for(let quadrado of quadradinhos){
    quadrado.onclick = gerarCor;
}

//Função que verifica se todos os quadrados estão com a mesma cor
function verificarFinal(){
    if(quadradinhos[0].style.backgroundColor == quadradinhos[1].style.backgroundColor && quadradinhos[1].style.backgroundColor == quadradinhos[2].style.backgroundColor && quadradinhos[2].style.backgroundColor == quadradinhos[3].style.backgroundColor){
        resposta.innerHTML = "!!! VOCÊ VENCEU !!!";
        
        for(let quadrado of quadradinhos){
            quadrado.onclick = null;
            setTimeout(() => {
                quadrado.classList.add("virarQuadradinho");
            }, 1000);
        }  
    }
    else{
        resposta.innerHTML= "Ainda não foi !!";
    }
}

//Função para resetar o jogo, limpando as cores de fundo e trocando o texto de resposta
function resetarJogo(){
    for(let quadrado of quadradinhos){
        quadrado.style.backgroundColor = "unset";
        quadrado.onclick = gerarCor;        
    }
    resposta.innerHTML = "Jogo resetado !";
}

botao.ondblclick = resetarJogo;












//  let numero = Math.round(2.4); // arredonda para o mais próximo

//  numero = Math.floor(1625.9); // arredonda para baixo

//  numero = Math.ceil(25.5); // arredonda para cima

//  numero = Math.pow(5, 5); // Expoente
 
//  numero = Math.sqrt(25); // Raiz

//  numero = Math.PI; // PI

//  numero = Math.sin(0*Math.PI / 4); // SIN SENO OU COS COSENO

// console.log(numero);

// let numero = Math.ceil(Math.random() * 100); //Gerar numeros aleatorios arredondados para cima

// console.log(numero);