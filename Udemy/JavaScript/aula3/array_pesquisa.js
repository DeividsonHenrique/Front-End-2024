
        
var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var auxiliar = lista_frutas.indexOf('Uva')

if(auxiliar === -1){
console.log('Elemento não existe')
}else{
console.log('Elemento existe e esta na posição ' + auxiliar)
}