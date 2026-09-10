class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get cpf() {
        return this.#cpf
    }
    get nomeMaiusculo() {
        return this.nome.toUpperCase()
    }
    get nomeMinusculo() {
        return this.nome.toLowerCase()
    }

}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    // Funções get
    get estadoMaiusculo() {
        return this.estado.toUpperCase()
    }
    get estadoMinusculo() {
        return this.estado.toLowerCase()
    }
    get cidadeMaiusculo() {
        return this.cidade.toUpperCase()
    }
    get cidadeMinusculo() {
        return this.cidade.toLowerCase()
    }
    get ruaMaiusculo() {
        return this.rua.toUpperCase()
    }
    get ruaMinusculo() {
        return this.rua.toLowerCase()
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.Clientes = new Set()
        this.telefones = new Set()
    }

    // Funções get
    get cnpj() {
        return this.#cnpj
    }
    get nomeFantasiaMaiusculo() {
        return this.nomeFantasia.toUpperCase()
    }
    get nomeFantasiaMinusculo() {
        return this.nomeFantasia.toLowerCase()
    }
    get razaoSocialMaiusculo() {
        return this.razaoSocial.toUpperCase()
    }
    get razaoSocialMinusculo() {
        return this.razaoSocial.toLowerCase()
    }


    // Implementando função detalhe
    detalhe() {

        let descricao = ""

        descricao += "Razão Social: " + this.razaoSocial + "\n"
        descricao += "Nome fantasia: " + this.nomeFantasia + "\n"
        descricao += "--------------------------------- \n"

        for (let cliente of this.Clientes) {

            descricao += "Nome: " + cliente.nome + "\n"

            descricao += "Estado: " + cliente.endereco.estado
            descricao += " cidade: " + cliente.endereco.cidade
            descricao += " rua: " + cliente.endereco.rua
            descricao += " numero: " + cliente.endereco.numero + "\n"

            for (let telefone of cliente.telefones) {

                descricao += "ddd: " + telefone.ddd
                descricao += " numero: " + telefone.numero + "\n"

            }
            descricao += "\n"
        }

        return descricao
    }
}

export{ Cliente, Telefone, Endereco, Empresa }