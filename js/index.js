(function($){
  $(function(){
    // console.log("here");

    //$('.button-collapse').sideNav();

        $('#burger').click(function(){
          let tr = $('<tr>');
          $('tbody').append(tr);
          let td = $('<td>');
          let td2 = $('<td>');
          tr.append(td, td2);
          let inputVal = $('.burger').text();
          let inputPrice = $('.burgerPrice').text();
          $(td).append(inputVal);
          $(td2).append(inputPrice);
        })

          $('#pie').click(function(){
          let tr = $('<tr>');
          $('tbody').append(tr);
          let td = $('<td>');
          let td2 = $('<td>');
          tr.append(td, td2);
          let inputVal = $('.pizza').text();
          let inputPrice = $('.pizzaPrice').text();
          $(td).append(inputVal);
          $(td2).append(inputPrice);
        })

        $('#swine').click(function(){
          let tr = $('<tr>');
          $('tbody').append(tr);
          let td = $('<td>');
          let td2 = $('<td>');
          tr.append(td, td2);
          let inputVal = $('.swine').text();
          let inputPrice = $('.swinePrice').text();
          $(td).append(inputVal);
          $(td2).append(inputPrice);
        })

        $('#icecream').click(function(){
          let tr = $('<tr>');
          $('tbody').append(tr);
          let td = $('<td>');
          let td2 = $('<td>');
          tr.append(td, td2);
          let inputVal = $('.icecream').text();
          let inputPrice = $('.icecreamPrice').text();
          $(td).append(inputVal);
          $(td2).append(inputPrice);
        })


  }); // end of document ready

})(jQuery); // end of jQuery name space
