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