
       let assinatura = {
        idCliente: 1000,
        descricao: 'Acesso a internet',
        status(){
            console.log('ativo')
        }
       }

       console.log(assinatura.descricao)

       let y = assinatura
       console.log(y.descricao)

       ///

       y.descricao = 'Internet + Tv + Telefone'
       console.log(assinatura.descricao)
       console.log(y.descricao)
