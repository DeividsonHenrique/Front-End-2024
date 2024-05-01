
        /*
        if(!(5 >= 2)){
            document.write('Verdadeiro')
        }else{
            document.write('falso')
        }
        */

        var nota = prompt('Digite a nota do aluno')
        var faltas = prompt('Digite a quantidade de faltas:')
        var media = 7
        var faltas_maximas = 15

        /*
        if (nota >= media && faltas <= faltas_maximas){
            document.write('Aprovado')
            //logica
        }

        else{
            document.write('Reprovado')
            //logica
        }
        */


        var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado' 
        document.write(resultado)