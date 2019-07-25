let quadradinhos = document.querySelectorAll("div");
let resposta = document.querySelector("h2");
let botao = document.querySelector("button");

let cores = ["red", "blue", "yellow"];

function gerarCor(){
    let aleatorio = Math.floor(Math.random()* cores.length);
    
    this.style.backgroundColor = cores[aleatorio];
    verificarFinal();
}

for(let quadrado of quadradinhos){
    quadrado.onclick = gerarCor;
}

function verificarFinal(){
    if(quadradinhos[0].style.backgroundColor == quadradinhos[1].style.backgroundColor && quadradinhos[1].style.backgroundColor == quadradinhos[2].style.backgroundColor && quadradinhos[2].style.backgroundColor == quadradinhos[3].style.backgroundColor){
        resposta.innerHTML = "!!! VOCÊ VENCEU !!!";

        for(let quadrado of quadradinhos){
            quadrado.onclick = null;
            quadrado.classList.add("virarQuadradinho");
        }  
    }
    else{
        resposta.innerHTML= "Ainda não foi !!";
    }
}

function resetarJogo(){
    for(let quadrado of quadradinhos){
        quadrado.style.backgroundColor = "unset";
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