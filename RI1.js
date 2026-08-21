const personagens = [
    {
        nome: "Steve Rogers ",
        condinome: "Capitão América",
        armaPrincipal: "Escudo Americano",
        ArmaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 82,
        descricao: function() {
            return "Nome do Personagem: " + this.nome + "\n"
            + "Codinome do Personagem: " + this.condinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.ArmaSecundaria + "\n"
            + "Nivel de Força: " + this.forca + "\n"
            + "Nivel de Velocidade: " + this.velocidade + "\n"
            + "Nivel de Resistência: " + this.resistencia
        }
    },
    {
        nome: "Tony Stark ",
        condinome: "Homem de Ferro",
        armaPrincipal: "Armadura de Ferro",
        ArmaSecundaria: "",
        velocidade: 78,
        forca: 82,
        resistencia: 80,
        descricao: function() {
            return "Nome do Personagem: " + this.nome + "\n"
            + "Codinome do Personagem: " + this.condinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.ArmaSecundaria + "\n"
            + "Nivel de Força: " + this.forca + "\n"
            + "Nivel de Velocidade: " + this.velocidade + "\n"
            + "Nivel de Resistência: " + this.resistencia
        }
    },
    {
        nome: "Thor ",
        condinome: "Thor",
        armaPrincipal: "Martelo de Thor",
        ArmaSecundaria: "",
        velocidade: 82,
        forca: 95,
        resistencia: 94,
        descricao: function() {
            return "Nome do Personagem: " + this.nome + "\n"
            + "Codinome do Personagem: " + this.condinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.ArmaSecundaria + "\n"
            + "Nivel de Força: " + this.forca + "\n"
            + "Nivel de Velocidade: " + this.velocidade + "\n"
            + "Nivel de Resistência: " + this.resistencia
        }
    },
    {
        nome: "Natasha Romanoff ",
        condinome: "Viuva Negra",
        armaPrincipal: "Mordida da viuva(braceletes)",
        ArmaSecundaria: "",
        velocidade: 92,
        forca: 60,
        resistencia: 68,
        descricao: function() {
            return "Nome do Personagem: " + this.nome + "\n"
            + "Codinome do Personagem: " + this.condinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.ArmaSecundaria + "\n"
            + "Nivel de Força: " + this.forca + "\n"
            + "Nivel de Velocidade: " + this.velocidade + "\n"
            + "Nivel de Resistência: " + this.resistencia
        }
    },
    {
        nome: "Bruce Banner ",
        condinome: "Hulk",
        armaPrincipal: "Força Bruta",
        ArmaSecundaria: "",
        velocidade: 72,
        forca: 100,
        resistencia: 100,
        descricao: function() {
            return "Nome do Personagem: " + this.nome + "\n"
            + "Codinome do Personagem: " + this.condinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.ArmaSecundaria + "\n"
            + "Nivel de Força: " + this.forca + "\n"
            + "Nivel de Velocidade: " + this.velocidade + "\n"
            + "Nivel de Resistência: " + this.resistencia
        }
    },
    {
        nome: "Thanos ",
        condinome: "Thanos",
        armaPrincipal: "Manopla do Infinito",
        ArmaSecundaria: "",
        velocidade: 88,
        forca: 98,
        resistencia: 97
        ,
        descricao: function() {
            return "Nome do Personagem: " + this.nome + "\n"
            + "Codinome do Personagem: " + this.condinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.ArmaSecundaria + "\n"
            + "Nivel de Força: " + this.forca + "\n"
            + "Nivel de Velocidade: " + this.velocidade + "\n"
            + "Nivel de Resistência: " + this.resistencia
        }
    }
]

function compararAtributos() {
    for (let i = 0; i < personagens.length; i++) {
        for (let j = i+1 ; j < personagens.length; j++) {
            console.log("------------------------------------------------");
            console.log(personagens[i].nome + " VS " + personagens[j].nome);
            console.log("------------------------------------------------");
            console.log(personagens[i].descricao() + "\n");
            console.log(personagens[j].descricao() + "\n");
            console.log("------------------------------------------------");

            if (personagens[i].velocidade > personagens[j].velocidade) {
                console.log(personagens[i].nome + "Vence em Velocidade");
            }else if (personagens[i].velocidade < personagens[j].velocidade) {
                console.log(personagens[j].nome + "Vence em Velocidade");
            }else{
                console.log("Empate em Resistência\n");
            }
            if (personagens[i].forca > personagens[j].forca) {
                console.log(personagens[i].nome + "Vence em Força");
            }else if (personagens[i].forca < personagens[j].forca) {
                console.log(personagens[j].nome + "Vence em Força");
                //Sobrevivi
            }else{
                console.log("Empate em Resistência\n");
            }
            if (personagens[i].resistencia > personagens[j].resistencia) {
                console.log(personagens[i].nome + "Vence em Resistência\n");
            }else if (personagens[i].resistencia < personagens[j].resistencia) {
                console.log(personagens[j].nome + "Vence em Resistência\n");
            }else{
                console.log("Empate em Resistência\n");
            }
        }
    }
}

function pontuacaoGeral() {
    let c = 0;
    let maiorpontos = 0;
    let personagemMaisForte = "";
    for (c = 0; c < personagens.length; c++) {
        let mediapontos = personagens[c].velocidade + personagens[c].forca + personagens[c].resistencia;
        if (mediapontos > maiorpontos) {
            maiorpontos = mediapontos;
            personagemMaisForte = personagens[c].nome;
        }
    }
    console.log("------------------------------------------------");
    console.log(personagemMaisForte + "é o personagem mais forte com a maior pontuação geral de: " + maiorpontos);
}

compararAtributos();
pontuacaoGeral();