
  /*
var lista_frutas = Array()

lista_frutas[0] = 'Maçã'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

console.log(lista_frutas.sort())
*/

var lista_numeros = Array()

lista_numeros[0] = '1'
lista_numeros[1] = '12'
lista_numeros[2] = '18'
lista_numeros[3] = '3'
lista_numeros[4] = '40'
lista_numeros[5] = '7'

console.log(lista_numeros.sort(orndenaNumeros))

function orndenaNumeros(a, b){
  return a - b
  // < 0 = a sera ordenado antes de b
  // > 0 = b sera ordenado antes de a
  // > == a ordem é mantida
}