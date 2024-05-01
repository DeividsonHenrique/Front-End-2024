
        //modelo da objeto
        class ContaBancaria{
            //agencia
            //numeroConta
            //saldo
            //limite

            constructor(){
                this.agencia = 1075
                this.numeroConta = 8351125
                this.saldo = 50
                this.limite = 450
            }

            depositar(valorDeposito){
                this.saldo += valorDeposito
            }

            sacar(valorSaque){
                this.saldo -= valorSaque
            }

            consultarSaldo(){
                return this.saldo
            }
        }

        let x = new ContaBancaria()
        let y = new ContaBancaria()

        console.log(x.consultarSaldo())
        x.depositar(450)
        console.log(x.consultarSaldo())
        x.sacar(200)
        console.log(x.consultarSaldo())

        console.log(y.consultarSaldo())
