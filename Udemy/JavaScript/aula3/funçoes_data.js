

        //var data = new Date()

        //document.write(data.getDate() + ' / ' + (data.getMonth() +1 ) + ' / ' + data.getFullYear() + ' - ' + data.getHours() + ':' + data.getMinutes() + ';' + data.getSeconds())

        /*
        //adicionar / remover
        document.write(data.toDateString())
        data.setDate(data.getDate() + 1)
        document.write('<hr>')
        document.write(data.toDateString())
        document.write('<br/><br/><hr/>')
        //adicionar / remover meses
        document.write(data.toDateString())
        data.setMonth(data.getMonth() - 1)
        document.write('<hr>')
        document.write(data.toDateString())
        document.write('<br/><br/><hr/>')
        //adicionar / remover anos
        document.write(data.toDateString())
        data.setFullYear(data.getFullYear() + 10)
        document.write('<hr>')
        document.write(data.toDateString())
        */

        // 16/11/2018
        var data1 = new Date(2017, 10, 16)

        // 16/11/2025
        var data2 = new Date(2025, 10, 16)

        document.write(data1.toString())
        document.write('<hr>')
        document.write(data2.toString())

        document.write('<br><br><hr>')
        //converter datas para algo que possamos calcular
        document.write(data1.getTime())
        document.write('<hr>')
        document.write(data2.getTime())

        document.write('<br><br><hr>')
        //encontrar a quantidade de milesegundos entre data1 e data2
        document.write()

        var Milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
        var Milissegundos_por_dia = (1*24*60*60*1000)
        //1 dia tem 24hrs, cada hora tem 60min, cada minuto tem 60seg, cadaseg tem 1000 milisegundos.

        document.write('<br><br><hr>')

        document.write('a diferença entre data1 e data2 é de ' + Math.ceil(Milissegundos_entre_datas / Milissegundos_por_dia) + ' dia(s)')
