

       function exebirArtigo(id, callbackSucesso, callbackErro){
        //logica: recuperar o id via requisição http
        if (true){
            callbackSucesso('Funções de callback em js', 'Funções de callback são muito usadas')
        } else{
            callbackErro('Erro ao recuperar os dados')
        }
       }

       var callbackSucesso = function(titulo, descricao){
        document.write('<h1>' + titulo + '</h1>')
        document.write('</hr>')
        document.write('<p>' + descricao + '</hr>')
       }

       var callbackErro = function(erro){   
        document.write('<p><b>Erro:</b> ' + erro + '</p>')

       }

       exebirArtigo(6, callbackSucesso, callbackErro)
