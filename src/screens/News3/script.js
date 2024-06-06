window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var content = document.querySelector('.content');
    var title = document.querySelector('h1');
    var scrollPosition = window.scrollY;
    var headerHeight = header.offsetHeight;

    header.style.height = Math.max(400 - scrollPosition, 100) + 'px';

    if (headerHeight <= title.offsetTop) {
      title.style.visibility = 'hidden';
    } else {
      title.style.visibility = 'visible';
    }
  });

  document.addEventListener('keydown', function(event) {
    // seta para cima (keyCode 38) para baixo (keyCode 40)
    
    if (event.keyCode === 38) {
        window.scrollBy(0, -50); 
    } else if (event.keyCode === 40) {
      
        window.scrollBy(0, 50); 
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var shareButton = document.getElementById('share-button');

    // evento de clique
    shareButton.addEventListener('click', function() {
  
        shareButton.classList.add('clicked');

        // copia o link
        var url = window.location.href;
        navigator.clipboard.writeText(url).then(function() {
            // mensagem de alerta
            alert('Link copiado para a área de transferência: ' + url);
        }).catch(function() {
            // mensagem de erro
            alert('Não foi possível copiar o link.');
        });

        setTimeout(function() {
            shareButton.classList.remove('clicked');
        }, 500); // milisegundos
    });
});
