

      //aviao
      //atributos cor e modelo, metodo levantar voo

      let a1 = {
        cor: 'Branco',
        modelo: 'Airbus a380',
        levantrVoo: function(){console.log('Levantar Voo')}
      }



      let AviaoF = function(){
        this.cor = 'Azul',
        this.modelo = 'Boing 787',
        this.levantrVoo = function(){console.log('Levantar Voo')}
      }

      let a2 =  new AviaoF()

      //classe

      class AviaoC{
        constructor(){
            this.cor = 'Vermelho',
        this.modelo = 'Embraer E-Jets'
        }
        levantrVoo(){
            console.log('Levantar Voo')
        }
      }

      let a3 = new AviaoC()

      console.log(a1)
      console.log(a2)
      console.log(a3)