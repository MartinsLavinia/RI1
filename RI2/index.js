function Telefone(ddd, numero) {
    this.ddd = ddd
    this.numero = numero

    //Funções set e get
    this.setDDD = function (valor) {
        this.ddd = valor
    }
    this.getDDD = function () {
        return this.ddd
    }

    this.setNumero = function (valor) {
        this.numero = valor
    }
    this.getNumero = function () {
        return this.numero
    }

}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numero = numero

    //Funções set e get
    this.setEstado = function (valor) {
        this.estado = valor
    }
    this.getEstado = function () {
        return this.estado
    }

    this.setCidade = function (valor) {
        this.cidade = valor
    }
    this.getCidade = function () {
        return this.cidade
    }

    this.setRua = function (valor) {
        this.rua = valor
    }
    this.getRua = function () {
        return this.rua
    }

    this.setNumero = function (valor) {
        this.numero = valor
    }
    this.getNumero = function () {
        return this.numero
    }

    //Função Maiusculo e Minusculo
    this.getEstadoMaiusculo = function () {
        return this.estado.toUpperCase()
    }
    this.getEstadoMinusculo = function () {
        return this.estado.toLowerCase()
    }

    this.getCidadeMaiusculo = function () {
        return this.cidade.toUpperCase()
    }
    this.getCidadeMinusculo = function () {
        return this.cidade.toLowerCase()
    }

    this.getRuaMaiusculo = function () {
        return this.rua.toUpperCase()
    }
    this.getRuaMinusculo = function () {
        return this.rua.toLowerCase()
    }

}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    //Funções set e get
    this.setNome = function (valor) {
        this.nome = valor
    }
    this.getNome = function () {
        return this.nome
    }

    this.setTelefone = function (valor) {
        this.telefoneCelular = valor
    }
    this.getTelefone = function () {
        return this.telefoneCelular
        //Alegria
    }

    this.setEmail = function (valor) {
        this.email = valor
    }
    this.getEmail = function () {
        return this.email
    }

    this.setEndereco = function (valor) {
        this.endereco = valor
    }
    this.getEndereco = function () {
        return this.endereco
    }

    //Função Maiusculo e Minusculo
    this.getNomeMaiusculo = function () {
        return this.nome.toUpperCase()
    }
    this.getNomeMinusculo = function () {
        return this.nome.toLowerCase()
    }

    this.getEmailMaiusculo = function () {
        return this.email.toUpperCase()
    }
    this.getEmailMinusculo = function () {
        return this.email.toLowerCase()
    }

    //Descrição do Cliente
    Object.defineProperty(this, 'descricao', {
        get: function () {
            return "-----------------------------\n"
                + "Informações do Cliente: " + "\n"
                + "Nome: " + this.getNome() + "\n"
                + "Email: " + this.getEmail() + "\n"
                + "-----------------------------\n"
                + "-----------------------------\n"
                + "Telefone: \n"
                + "DDD: " + this.getTelefone().getDDD() + "\n"
                + "Número: " + this.getTelefone().getNumero() + "\n"
                + "-----------------------------\n"
                + "Endereço: \n"
                + "Estado: " + this.getEndereco().getEstado() + "\n"
                + "Cidade: " + this.getEndereco().getCidade() + "\n"
                + "Rua: " + this.getEndereco().getRua() + "\n"
                + "Número: " + this.getEndereco().getNumero() + "\n"
                + "-----------------------------\n"
        }
    })
}

let telefone = new Telefone('11', '999999999')
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987')
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco)

// Mais Clientes
let telefone2 = new Telefone('12', '888888888')
let endereco2 = new Endereco('SP', 'Jacareí', 'Rua A', '100')

let cliente2 = new Cliente('Ana Beatriz', telefone2, 'ana@app.com', endereco2)

let telefone3 = new Telefone('13', '777777777')
let endereco3 = new Endereco('RJ', 'Rio de Janeiro', 'Rua B', '200')

let cliente3 = new Cliente('Bruno Silva', telefone3, 'bruno@app.com', endereco3)

let clientes = [cliente, cliente2, cliente3]

function ordenarClientes(clientes) {
    let clientesOrdenados = [...clientes]

    clientesOrdenados.sort(function (a, b) {
        return a.nome.localeCompare(b.nome)
    })

    return clientesOrdenados
}

console.log(cliente.descricao)

let clientesOrdenados = ordenarClientes(clientes)

console.log("Clientes fora de ordem:")
console.log("---------------------------------------")
clientes.forEach(function (cliente) {
    console.log(cliente.nome)
})

//Clientes ordenados
console.log("\n")
console.log("Clientes Ordenados em ordem alfabética:")
console.log("---------------------------------------")
clientesOrdenados.forEach(function (cliente) {
    console.log(cliente.nome)
})