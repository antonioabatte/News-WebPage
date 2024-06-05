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