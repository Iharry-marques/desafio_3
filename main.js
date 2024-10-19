/*
Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/



class Heroi {
    constructor(nome, idade, tipo){
        this.home = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        switch(this.tipo){
            case 'mago':
                ataque = 'usou magia';
                break
            case 'guerreiro':
                ataque = 'usou espada';
                break
            case 'monge':
                ataque = 'usou artes marciais';
                break
            case 'ninja':
                ataque = 'usou shuriken';
                break
            default:
                ataque = "fez um ataque desconhecido"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

}


let heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar(); 

let heroi2 = new Heroi("Merlin", 150, "mago");
heroi2.atacar(); 

let heroi3 = new Heroi("Lao", 40, "monge");
heroi3.atacar(); 

let heroi4 = new Heroi("Ryu", 25, "ninja");
heroi4.atacar(); 


