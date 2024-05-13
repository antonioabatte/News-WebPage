document.addEventListener('DOMContentLoaded', function() {

    function clonarNoticia(titulo, autor, data, imagemSrc, top, left) {

        var divOriginal = document.getElementById('noticiaOriginal');
        var divClone = divOriginal.cloneNode(true);

        var tituloElement = divClone.querySelector('h4');
        var autorElement = divClone.querySelector('.autor2');
        var dataElement = divClone.querySelector('.Data');
        var imagemElement = divClone.querySelector('img');

        tituloElement.textContent = titulo;
        autorElement.textContent = autor;
        dataElement.textContent = data;
        imagemElement.src = imagemSrc;

        divClone.style.display = 'block';

        divClone.style.position = 'absolute';
        divClone.style.marginTop = top;
        divClone.style.marginLeft = left;
       
        imagemElement.style.objectFit = 'cover';
        imagemElement.style.height = '390px';

        document.body.appendChild(divClone);
    }

    clonarNoticia(
        'Enchente em Porto Alegre: nível do Guaíba volta a bater marca de 5 metros',
        'CNN',
        'Maio. 13, 2024',
        './src/assets/sao-leopoldo-1.jpg',
        '270px',
        '0px',
    );

    clonarNoticia(
        'Leon S. Kennedy é o protagonista de Resident Evil 9, diz rumor',
        'O Vicio',
        'Maio. 13, 2024',
        './src/assets/20221020-ovicio-resident-evil-4-leon.jpg',
        '0px',
        '419px',
    );

});