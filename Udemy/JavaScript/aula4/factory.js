

let biciletaFactory = function(cor, aro, marcha){
    return{
        cor,
        aro,
        marcha,

        pedalar(){console.log('Metdodo executado com sucesso!!')}
    }
}

let bicicleta1 = biciletaFactory('verde', '29', '21')
console.log(bicicleta1)

let bicicleta2 = biciletaFactory('azul', '26', '12')
console.log(bicicleta2)



let Cadastro = function(nome, sexo, idade, estado){
    return{
        nome,
        sexo,
        idade: idade + ' anos',
        estado,

        final(){console.log('Cadastro completo')}
    }
}

let cadastro = Cadastro('Henry', 'Masculino', 23, 'Paraná')
console.log(cadastro)

console.log(cadastro.nome)
console.log(cadastro.idade)
console.log(cadastro.estado)

let cadastro1 = Cadastro('Jennyfer', 'Feminino', 24, 'São paulo')
cadastro1.idade = 25    
console.log(cadastro1)

console.log(cadastro1.nome)
console.log(cadastro1.idade)
console.log(cadastro1.estado)



