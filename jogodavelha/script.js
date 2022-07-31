let vez = "X"
let jogo = true // o jogo acaba qnd uma das condições for atingida

const resultado = [   
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

const jogar = (id) => {          //toda vez que clico no bloquinho é executada a função
    const casa = document.getElementById(id)

    if(jogo === true){
        if(casa.innerHTML == ""){  //só preenche o tabuleiro se a casa estiver sozinha
            if (vez == "X"){
                casa.innerHTML = "X"   // inserindo no HTML
                vez = "O"                          
            } else {               // entra e finaliza o bloco nessa estrutura de decisão
                casa.innerHTML = "O"        
                vez = "X"
            }
        }        

        resultado.forEach(item => {  // arrow function. item representa cada um dos arrays dentro do array maior
            const casa1 = document.getElementById(item[0]).innerHTML        // criar validação 
            const casa2 = document.getElementById(item[1]).innerHTML        // cada elemento do meu array é chamado de item
            const casa3 = document.getElementById(item[2]).innerHTML 


            if(casa1 == "X" && casa2 == "X" && casa3 == "X"){       // idealmente: n tratar tantos if no código - princípio da responsabilidade única 
                swal({
                    
                    title: "X venceu",
                    icon: 'success'
                    
                    });
                jogo = false
            }

            if(casa1 == "O" && casa2 == "O" && casa3 == "O"){                  
                swal({
                    
                    title: "O venceu",
                    icon: 'success'
                    
                    });
                jogo = false
            }
        }) 

    }   
}

 
const tabuleiro = document.querySelector("#tabuleiro")

for(let i = 1; i < 9; i+=3){
tabuleiro.innerHTML +=  ``
}
