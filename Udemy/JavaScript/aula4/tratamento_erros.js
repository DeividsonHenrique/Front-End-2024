      

        //netflix

        let video = Array()

        video[1] = Array()
        video[1] ['Nome'] = 'Pokemon'
        video[1] ['Categoria'] = 'anime'
 
        function getVideo(video){
            

            try {
                //logica
                //http
                console.log(video[0] ['nome'])
            } catch(erro){
                tartarErro(erro)
                console.log('Agora sim podemos tratar esse erro')
                throw new Error('Houve um erro mas não se preocupe estamos trabalhando nisso agora')
            } finally{
                console.log('Sempre passa por aqui (try / catch)')
            }
            

            console.log('A aplicação não morreu')
        }
        function tartarErro(e){
            //logica para registrar 
            console.log(e)
        }
        
        getVideo(video)