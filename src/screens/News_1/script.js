window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var content = document.querySelector('.content');
    var title = document.querySelector('h1');
    var scrollPosition = window.scrollY; // Obtém a posição do scroll da tela e a armazena na variável 'scrollPosition'
    var headerHeight = header.offsetHeight;

    // Reduz a altura da imagem enquanto faz scroll para baixo
    header.style.height = Math.max(400 - scrollPosition, 100) + 'px';

    // Esconde o título quando a parte inferior da imagem atinge o topo da janela
    if (headerHeight <= title.offsetTop) {
      title.style.visibility = 'hidden';
    } else {
      title.style.visibility = 'visible';
    }
  });

  window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var documentHeight = document.body.clientHeight;
    var triggerHeight = 50; 

    if (windowHeight + scrollY >= documentHeight - triggerHeight) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
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
      }, 500);
  });
});
