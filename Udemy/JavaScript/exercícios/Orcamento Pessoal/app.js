class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano =ano
        this.mes =mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao 
        this.valor = valor
    }

    validarDados() {
        for(let i in this) {
        if(this[i] == undefined || this[i] == '' || this[i] == null) {
            return false
             }
        }
        return true
    }
}

class Bd{

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id') //null
        return parseInt(proximoId) + 1
    }

    gravar(d){
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){

        //array de desoesa
        let despesas = Array()

        let id = localStorage.getItem('id')

        //recuperar todas as despesas cadatradas em localStorage
        for( let i =1; i <= id; i++){

            //recuperar a despesa
            let despesa = JSON.parse(localStorage.getItem(i))
        
            //existe a possibilidade de haver indices que foram pulados ou removidos
            //vamos pular esses indices

            if(despesa === null){
                continue
            }

            despesa.id = i
            despesas.push(despesa)
            
        }

        return despesas
    }

    pesquisar(despesa){
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()
        console.log(despesasFiltradas)
        console.log(despesa)
        console.log(despesasFiltradas)

        //ano
        if(despesa.ano != ''){
            console.log('Filtro de ano')
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }

        //mes
        if(despesa.mes != ''){
            console.log('Filtro de mes')
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

        //dia
        if(despesa.dia != ''){
            console.log('Filtro de dia')
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }

        //tipo
        if(despesa.tipo != ''){
            console.log('Filtro de tipo')
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }

        //descricao
        if(despesa.descricao != ''){
            console.log('Filtro de descricao')
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }

        //valor
        if(despesa.valor != ''){
            console.log('Filtro de valor')
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }

        return despesasFiltradas
    }

    remover(id){
        localStorage.removeItem(id)
    }
}

let bd = new Bd()

function cadastrarDispesa(){
    
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')


    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if(despesa.validarDados()){
        bd.gravar(despesa)

        document.getElementById('exampleModalLabel').innerHTML = 'Registro inserido com sucesso!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_conteudo_div').innerHTML = 'Despesa foi cadastrada com sucesso!'
        document.getElementById('modal_btn').innerHTML = 'Voltar'
        document.getElementById('modal_btn').className = 'btn btn-success'

        //alerta de sucesso
        $('#modalRegistraDespesa').modal('show') //Jquery

        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''
    }else{

        document.getElementById('exampleModalLabel').innerHTML = 'Erro na gravação'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo_div').innerHTML = 'Erro na Gravação, Verifique se todos os campos foram preenchidos.'
        document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
        document.getElementById('modal_btn').className = 'btn btn-danger'

        //alerta de erro
        $('#modalRegistraDespesa').modal('show') //Jquery
    }


}


function carregarListaDespesa(despesas = Array(), filtro = false){

    
    if(despesas.length == 0 && filtro == false){
    despesas = bd.recuperarTodosRegistros()
    }

    //selecionando o elemento tbody da tabela
    let listaDespesas =  document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''

        // <tr>
        //         <td>16/03/2018</td>
        //         <td>Alimentação</td>
        //         <td>compras do mes</td>
        //         <td>500</td>
        //       </tr>

        //percorrer o array despesas, listando cada despesa de forma dinamica

        despesas.forEach(function(d){

            //console.log(d)
            
            //criando a linha (tr)

            let linha = listaDespesas.insertRow()

            //criar as colunas (td)

            d.dia = d.dia < 10?  '0' + d.dia : d.dia 
            d.mes = d.mes < 10? '0' + d.mes : d.mes
            linha.insertCell(0).innerHTML = `${d.dia} / ${d.mes} / ${d.ano}`


            //ajustar o tipo
            switch(d.tipo){
                case '1': d.tipo = 'Alimentação'
                    break
                case '2': d.tipo = 'Educação'
                    break
                case '3': d.tipo = 'Lazer'
                    break
                case '4': d.tipo = 'Saúde'
                    break
                case '5': d.tipo = 'Transporte'
                    break
            }
            linha.insertCell(1).innerHTML = d.tipo

            linha.insertCell(2).innerHTML = d.descricao

            d.valor = d.valor >= 0? d.valor + ',00' :d.valor
            linha.insertCell(3).innerHTML = d.valor


            //criar botão de exclusao
            let btn = document.createElement("button")
            btn.className = 'btn btn-danger'
            btn.innerHTML = '<i class="fas fa-times"></i>'
            btn.id = 'id_despesa_' + d.id
            btn.onclick = function(){//remover despesa
                //remover despesa
                let id = this.id.replace('id_despesa_', '')

                //alert(id)

                bd.remover(id)

                window.location.reload()
            }
            linha.insertCell(4).append(btn)

            console.log(d)
        })
}

function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    let despesas = bd.pesquisar(despesa)

    this.carregarListaDespesa(despesas, true)
    
}