$ (function() {

   var $links = $('.menu a') //выбираем все ""а"" верхнего меню
   $links.on('click', function () { //функция при клике на а верхнего уровня
     var $submenu = $(this).siblings('.submenu'); //создаем переменную суб-меню. поиск рядом с выбранным объектом
     console.log('submenu', $submenu); //проверка, находитм наше суб-меню
     // $submenu.show(); - просто показываем суб-меню. можно прописать так: $submenu.css('display', 'block');
     $submenu.slideToggle(); //раскрывает и скрывает субменю! toggle - скрывает/раскрывает, slide - добавляет плавное движение (анимация)
   });

});
