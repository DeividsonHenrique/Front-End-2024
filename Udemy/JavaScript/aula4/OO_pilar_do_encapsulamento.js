<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScrip - Encapsulamento</title>
    
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">

        class Tv{
            constructor(){
                this._relacaoCanais = Array(2,4,5,7,10)
                this._canalAtivo = 5
                this._volume = 5
            }

            //getters setters
            get canalAtivo(){
                return this._canalAtivo
            }

            set canalAtivo(canal){
                //
              if(this._relacaoCanais.indexOf(canal) !== -1){
                this._canalAtivo = canal
              }
                
            }
        }

        let tv = new Tv()

        tv.canalAtivo = 7
       console.log(tv.canalAtivo) 

    </script>
</head>
<body>
    <div id="output"></div>
</body>
</html>