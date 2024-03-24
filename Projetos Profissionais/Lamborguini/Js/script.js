let count =1
document.getElementById("radio1").checked = true

setInterval( function(){
    nextImage()
}, 5000)

function nextImage(){
    count++
    if(count > 4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true
}



window.addEventListener('scroll', function() {
    var element = document.getElementById('fixedElement');
    var scrollPosition = window.scrollY;
  
    // Define o limite de rolagem para fazer o elemento desaparecer
    var scrollLimit = 800;
  
    if (scrollPosition > scrollLimit) {
      element.classList.add('hidden'); // Adiciona a classe 'hidden' para tornar o elemento invisível
    } else {
      element.classList.remove('hidden'); // Remove a classe 'hidden' para tornar o elemento visível
    }
  });
