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

// Criando empresa
let enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Avenida Central", 500)
let empresa = new Empresa(
    "Tecnologia SJC LTDA",
    "Tech SJC",
    "12.345.678/0001-90",
    enderecoEmpresa
)

let telefoneEmpresa1 = new Telefone("12", "3941-1234")
let telefoneEmpresa2 = new Telefone("12", "99123-4567")

empresa.telefones.add(telefoneEmpresa1)
empresa.telefones.add(telefoneEmpresa2)

//Criando clientes
let cliente1 = new Cliente("João Silva", "123.456.789-00", new Endereco("SP", "São José dos Campos", "Rua das Flores", 102))
let cliente2 = new Cliente("Maria Oliveira", "987.654.321-00", new Endereco("MG", "Belo Horizonte", "Rua das Palmeiras", 220))
let cliente3 = new Cliente("Carlos Souza", "456.789.123-00", new Endereco("RJ", "Rio de Janeiro", "Rua das Acácias", 214))
let cliente4 = new Cliente("Ana Costa", "321.654.987-00", new Endereco("SP", "São José dos Campos", "Rua das Orquídeas", 170))
let cliente5 = new Cliente("Pedro Lima", "654.321.987-00", new Endereco("SP", "Ribeirão Preto", "Rua das Margaridas", 98))

//Telefones dos clientes
let telefoneCliente1 = new Telefone("12", "3941-5678")
let telefone2Cliente1 = new Telefone("12", "99123-9876")
let telefoneCliente2 = new Telefone("31", "99123-9876")
let telefone2Cliente2 = new Telefone("31", "3941-8765")
let telefoneCliente3 = new Telefone("21", "98765-4321")
let telefone2Cliente3 = new Telefone("21", "3941-1234")
let telefoneCliente4 = new Telefone("12", "3941-8765")
let telefone2Cliente4 = new Telefone("12", "99123-5432")
let telefoneCliente5 = new Telefone("16", "99123-5432")
let telefone2Cliente5 = new Telefone("16", "3941-4321")

// Adicionando os telefones aos clientes
cliente1.telefones.add(telefoneCliente1)
cliente1.telefones.add(telefone2Cliente1)

cliente2.telefones.add(telefoneCliente2)
cliente2.telefones.add(telefone2Cliente2)

cliente3.telefones.add(telefoneCliente3)
cliente3.telefones.add(telefone2Cliente3)

cliente4.telefones.add(telefoneCliente4)
cliente4.telefones.add(telefone2Cliente4)

cliente5.telefones.add(telefoneCliente5)
cliente5.telefones.add(telefone2Cliente5)

// Adcionando os clientes a empresa
empresa.Clientes.add(cliente1)
empresa.Clientes.add(cliente2)
empresa.Clientes.add(cliente3)
empresa.Clientes.add(cliente4)
empresa.Clientes.add(cliente5)

console.log(empresa.detalhe())