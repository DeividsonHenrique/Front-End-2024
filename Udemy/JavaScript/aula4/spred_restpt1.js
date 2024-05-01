

        //contexto spred

        //string
        let tituloArtigo = 'Como utilizar o operador rest/ spread'
        console.log(tituloArtigo)
        console.log(...tituloArtigo)
        console.log([...tituloArtigo])

        //arrays

        let listaCursos1 = ['NodeJS e MongoDB', 'ES6, Typescript e Angular 4']
        let listaCursos2 = ['Multiplataforma Andorid/IOS', 'Introdução ao GNU/Linux']
        let listaCursosCompleto = [...listaCursos1,'Web Completo', 'Android Completo', ...listaCursos2]
        console.log(listaCursosCompleto)

        //Objetos
        let pessoa = {nome: 'João', idade:27}
        let clone = {endereco: 'Rua ABC', ...pessoa}

        console.log(clone)
 