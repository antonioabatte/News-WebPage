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
        'Mai. 13, 2024',
        './src/assets/sao-leopoldo-1.jpg',
        '18%',
        '10%',
    );

    clonarNoticia(
        'Leon S. Kennedy é o protagonista de Resident Evil 9, diz rumor',
        'O Vicio',
        'Mai. 13, 2024',
        './src/assets/20221020-ovicio-resident-evil-4-leon.jpg',
        '0',
        '37%',
    );

});

document.addEventListener('DOMContentLoaded', function() {
    function cloneNews(titulo, autor, data, descricao, imagem) {

        var divOriginal = document.querySelector('.noticia2');
        var divClone = divOriginal.cloneNode(true);

        var tituloElement = divClone.querySelector('h5');
        var autorElement = divClone.querySelector('.Autor4');
        var dataElement = divClone.querySelector('.Data2');
        var imagemElement = divClone.querySelector('.TrendImage');
        var descricaoElement = divClone.querySelector('.descricao2');

        tituloElement.textContent = titulo;
        autorElement.textContent = autor;
        dataElement.textContent = data;
        imagemElement.src = imagem;
        descricaoElement.textContent = descricao;

        var trendNewsDiv = document.querySelector('.TrendNews');
        trendNewsDiv.appendChild(divClone);
    }

    cloneNews(
        'Inflação na Argentina cai pelo 4º mês seguido em abril, a 8,8%',
        'CNN',
        'Mai. 11, 2024',
        'A inflação da Argentina caiu para 8,8% em abril, ante alta de 11% em março.',
        './src/assets/argentina.jpg'
    );

    cloneNews(
        'Soja cai com importações de óleo de cozinha excluídas de tarifas à China',
        'Jorge Adorno',
        'Mai. 14, 2024',
        'Os futuros da soja na bolsa de Chicago caíram nesta terça-feira.',
        './src/assets/soja.jpg'
    );

    cloneNews(
        'EUA confiscarão ativos russos para financiar reconstrução da Ucrânia, diz Blinken',
        'Michael Conte',
        'Mai. 14, 2024',
        'Principal diplomata americano visitou Ucrânia',
        './src/assets/secretario.jpg'
    );

    cloneNews(
        'OAB pede ao Supremo extinção da dívida do RS com a União',
        'Luísa Martins',
        'Mai. 14, 2024',
        'Requerimento será analisado pelo ministro Luiz Fux, relator do processo na Corte',
        './src/assets/justica.jpg'
    );

});