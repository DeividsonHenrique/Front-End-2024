        let nome = 'Jorge'
        let idade = 29
        let sexo = 'Masculino'
        let profissao = 'Programador'
        

        let objeto = {
            nome: nome,
            idade: idade,
            sexo: sexo,
            profissao: profissao,
            exibirResumo: function(){
                console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é, ${this.profissao}`)
            }
        }

        console.log(objeto)
        objeto.exibirResumo()

        let objeto2 = {
            nomeTeste: nome, //nome = nome variavel / valor = valor da variavel
            idade,
            sexo,
            profissao,
            exibirResumo(){
                console.log(`${this.nomeTeste}, ${this.idade} anos, ${this.sexo} é, ${this.profissao}`)
            }
        }

        console.log(objeto2)
        objeto2.exibirResumo()
        