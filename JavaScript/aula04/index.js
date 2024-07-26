// Arquivos JS aula 04

let produtos = ['arroz', 'feijao', 'Leite'];
var codigos = Array(10, 20, 30);
var test = Array(10)
test[0] = 'oi'
test[9] = 'tudo bem'
test[10] = 'opa!'
let meses = ['jan', 'fev', 'mar', 'abr'];
meses[0] = 'janeiro';

// adicionar no final do push = adicionar

produtos.push('macarrao');
codigos.push(40, 50, 60, 70);
meses.push('mai', 'jun', 'jul', 'ago', '07');

// remover do final do pop = remover o último

produtos.pop();
codigos.pop();
meses.pop();

//adicionar ao inicio do unshift = adicionar

produtos.unshift('miojo', 'chocolate');

//remover do inicio do shift = remover o primeiro

produtos.shift();

//remover de uma posição especifica do splice = remover

produtos.splice(2, 1);
codigos.splice(2, 1);
meses.splice(2, 1);


//copiar o array = clone

let novosProdutos = produtos.slice();
let novosProdutos2 = produtos.slice(0, 3);

//tamanho do array = length

produtos.length



//spreed operator = copiar o array

let novosProdutos3 = [...produtos, 'ovo', 'cafe', 'agua'];