$(document).ready( function() {
  console.log('DOM JQuery loaded')
});

$ (function(event) {
   var $table1 = $('.table_1');
   var $article1 = $('.first_article');
     console.log($table1)
       console.log($article1)

   $table1.on('click', function (event) {
      event.preventDefault();
      $article1.slideToggle();
   });
});

   $ (function(event) {
      var $table2 = $('.table_2');
      var $article2 = $('.second_article');
      $table2.on('click', function (event) {
         event.preventDefault();
         $article2.slideToggle();
      });
  });

      $ (function(event) {
         var $table3 = $('.table_3');
         var $article3 = $('.third_article');
         $table3.on('click', function (event) {
            event.preventDefault();
            $article3.slideToggle();
         });
  });
