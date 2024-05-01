
        
        //setTimeout(function(){ document.write('teste')}, 2000)

        var i = 5

        var x = setInterval(function(){ document.write(i)
         i--

         if(i === 0){
            clearInterval(x)
         }
        }, 1000)
