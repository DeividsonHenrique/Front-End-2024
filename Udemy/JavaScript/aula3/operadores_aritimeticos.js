
    var num1 = prompt('Digite o valor de num1')
    var num2 = prompt('Digite o valor de num2')
    
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    document.write(`A soma entre ${num1} e ${num2} é: ${num1 + num2} <br><br> `)
    document.write(`A subtração entre ${num1} e ${num2} é: ${num1 - num2} <br><br>`)
    document.write(`A Múltiplicação entre ${num1} e ${num2} é: ${num1 * num2} <br><br>`)
    document.write(`A Divisão entre ${num1} e ${num2} é: ${num1 / num2} <br><br>`)
    document.write(`O resto de ${num1} e ${num2} é: ${num1 % num2} <br><br>`)
    document.write(`O incremento de ${num1} é: ${num1++} <br><br>`)
    document.write(`${num1} <br><br>`)
    document.write(`O Decremento de ${num2} é: ${--num2} <br><br>`)
   document.write(`${num2} <br><br>`)
        
        
        var teste = 'olá '

        //teste = teste + 5
        //teste += 5
        //teste -= 5
        //teste *=5
        //teste /= 2
        //teste %= 3
        teste += 'Jorge'
        document.write(teste)
        

        document.write((11 + 5 - 5 * 2) / 2)

        // () - aplicar precedência
        //em primeiro vem multiplicação e subtração
        //em segundo soma e subtração
