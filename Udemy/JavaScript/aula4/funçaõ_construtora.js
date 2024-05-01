      let Carro = function(){
        this.cor = 'Amarelo'
        this.modelo = 'Chevette'
        this.velocidadeAtual = 0
        this.velocidadeMaxima = 180

        this.acelerar = function(){
            //this.velocidadeAtual += 10

            let velocidade  = this.getVelocidadeAtual() + 10
            this.setVelocidadeAtual(velocidade)
        }

        this.getVelocidadeAtual = function(){
            return this.getVelocidadeAtual
        }

        this.setVelocidadeAtual = function(velocidadeAtual){
          this.getVelocidadeAtual = velocidadeAtual
        }

      }

      let carro = new Carro() 

      console.log(`A velocidade atual é, ${carro.getVelocidadeAtual()}`) 
      carro.acelerar()
      console.log(`A velocidade atual é, ${carro.getVelocidadeAtual()}`) 
