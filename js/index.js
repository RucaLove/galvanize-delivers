(function($){
  $(function(){
    console.log("here");

    //$('.button-collapse').sideNav();

        $('#burger').click(function(){
          console.log('burger clicks');
          var inputVal = 'Royale with Cheese';
          var inputPrice = '$8.99';
          console.log(inputVal);
          console.log($('tr'));
          $('tr')[1].append(inputVal);
          $('tr')[2].append(inputPrice);
        })

        $('#pie').click(function(){
          console.log('pie clicks');
          var inputVal = 'Arugula Pie';
          var inputPrice = '11.99';
          console.log(inputVal);
          console.log($('tr'));
          $('tr')[1].append(inputVal);
          $('tr')[2].append(inputPrice);
        })


  }); // end of document ready

})(jQuery); // end of jQuery name space
