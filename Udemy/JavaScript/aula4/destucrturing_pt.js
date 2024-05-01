        let produto = {
            descricao: 'Notebook',
            preco: 1800,
            detalhes: {
                fabricante: 'ABC',
                modelo: undefined
            }
        }

        //token
        //array => []
        //objeto => {}

        //let { descricao, preco} = produto


        //let { descricao: d, preco: p} = produto

        //valores que retornam undefined podem ser colocado um valor 

        //let { descricao: d, preco: p = 1000, desconto = 5} = produto

        let { detalhes: { fabricante: f, modelo = 'Não informado' } } = produto
        console.log(f, modelo)