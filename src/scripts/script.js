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

        var LastNDiv = document.querySelector('.LastN');
        LastNDiv.appendChild(divClone);

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

    clonarNoticia(
        'Governo Biden envia ao Congresso dos EUA pacote de US$ 1 bilhão em armas a Israel',
        'g1',
        'Mai. 14, 2024',
        './src/assets/biden.jpg',
        '56%',
        '37%',
    )
    
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

document.addEventListener('DOMContentLoaded', function() {
    function clonePapersLarge(titulo, autor, data, descricao, top, left) {
        var divOriginal = document.querySelector('.PapersLarge');
        var divClone = divOriginal.cloneNode(true);

        var tituloElement = divClone.querySelector('.h10');
        var autorElement = divClone.querySelector('.Autor3');
        var dataElement = divClone.querySelector('.Data3');
        var descricaoElement = divClone.querySelector('.descricao3');

        tituloElement.textContent = titulo;
        autorElement.textContent = autor;
        dataElement.textContent = data;
        descricaoElement.textContent = descricao;

        divClone.style.display = 'block';
        divClone.style.position = 'absolute';
        divClone.style.top = top;
        divClone.style.marginLeft = left;

        document.body.appendChild(divClone);
    }

    clonePapersLarge(
        'Robert Fico, primeiro-ministro da Eslováquia, é baleado na rua; estado de saúde é crítico, com risco de vida',
        'g1',
        'Mai. 15, 2024',
        'Cinco tiros foram disparados após uma reunião de governo, sendo que um deles atingiu o premiê no abdômen, disse a rede de TV TA3. Suspeito tem 71 anos. Robert Fico foi transferido de helicóptero para hospital da capital, Bratislava, e se encontra em estado crítico.',
        '141%',
        '10%',
    );

    clonePapersLarge(
        'Biden e Trump concordam em fazer 1º debate em junho',
        'g1',
        'Mai. 15, 2024',
        'O presidente Joe Biden e o ex-presidente Donald Trump concordaram na quarta-feira em realizar dois debates de campanha em junho e setembro, mas não havia garantias de que isso aconteceria, já que seus campos pareciam distantes em detalhes importantes, como o cenário e as regras básicas para o potencial confronto. desligados.',
        '184%',
        '10%'
    )
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