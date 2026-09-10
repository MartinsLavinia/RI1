import { Cliente, Telefone, Endereco, Empresa } from './classes.js'

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
//jujuba

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