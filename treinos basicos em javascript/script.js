// área de soma -------------------------------------------------------------

function somar(){
    let num1 = Number(document.getElementById('txtn1').value)
    let num2 = Number(document.getElementById('txtn2').value)
    let res = document.getElementById('res')
    let resultado = num1 + num2
    res.innerHTML = `O valor da soma entre ${num1} e ${num2} é de : ${resultado}`
}


function mensagem(){
    let res = document.getElementById('res')
    res.innerHTML = 'Digite dois números acima para somar!'
   }mensagem()

// area de multiplicação -----------------------------------------------------

function multiplicar(){
    let num3 = Number(document.getElementById('txtn3').value)
    let num4 = Number(document.getElementById('txtn4').value)
    let resM = document.getElementById('resM')
    let resultadoM = num3 * num4
    resM.innerHTML = `O valor da multiplicação entre ${num3} e ${num4} é de : ${resultadoM}`

}

function mensagemM(){
    let resM = document.getElementById('resM')
    resM.innerHTML = 'Digite dois números acima para Múltiplicar!'
    
}mensagemM()


// Área de subtração -----------------------------------------------------------

function subtrair(){
    let nums1 = Number(document.getElementById('txts1').value)
    let nums2 = Number(document.getElementById('txts2').value)
    let resS = document.getElementById('resS')
    let resultadoS = nums1 - nums2
    resS.innerHTML = `O valor da Subtração entre ${nums1} e ${nums2} é de : ${resultadoS}`
}

function mensagemS(){
    let resS = document.getElementById('resS')
    resS.innerHTML = 'Digite dois números acima para Subtrair!'
}mensagemS()

// Área de divisão ----------------------------------------------------------------

function dividir(){
    let numd1 = Number(document.getElementById('txtd1').value)
    let numd2 = Number(document.getElementById('txtd2').value)
    let resD = document.getElementById('resD')
    let valorD = numd1 / numd2
    resD.innerHTML = `O valor da Divisão de ${numd1} por ${numd2} é de : ${valorD}`
}

function mensagemD(){
    let resD = document.getElementById('resD')
    resD.innerHTML = 'Digite dois números acima para Dividir!'
}mensagemD()