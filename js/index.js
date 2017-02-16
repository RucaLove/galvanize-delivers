(function($){
  $(function(){
    console.log("here");

    //$('.button-collapse').sideNav();

        $('#burger').click(function(){
          console.log('burger clicks');
          var inputVal = 'test';
          console.log(inputVal);
          console.log($('tr'));
          $('tr')[1].append($('HELP'));
        })

        // $('#burger').click(function(){
        //   console.log('burger clicks');
        //   var inputVal = 'test';
        //   console.log(inputVal);
        //   $('tr').append('<td id="burger">' + inputVal +'</td>');
        // })


  }); // end of document ready

})(jQuery); // end of jQuery name space
