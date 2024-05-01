

        //var listaConvidados = ['Jorge','Jamilton','José','Ana', 'Maria']

        var listaConvidados = Array()
        listaConvidados['a'] = 'Jorge'
        listaConvidados[10] = 'Jamiltom'
        listaConvidados['zebra'] = 'José'
        listaConvidados[-1] = 'Ana'
        listaConvidados[true] = 'Maria'
        console.log(listaConvidados)

        for(var x in listaConvidados){
            console.log('Indice ' + x + ' Valor ' +listaConvidados[x])
        }
