(function($) {
  $(function() {
    //$('.button-collapse').sideNav();

    let allPrices = 0;
    function subTotal() {
      let itemSub = Number($(event.target).parent('p').siblings('span').children('h6:last-child').text().replace(/[^0-9\.]+/g, ""));
      let dollars = allPrices += itemSub;

      return dollars;
    }

    $(this).on('click', '.clicky', function() {
      let tr = $('<tr></tr>');
      $('tbody').append(tr);
      let td = $('<td></td>');
      let td2 = $('<td></td>');
      let td3 = $('<td></td>');
      tr.append(td, td2);

      let itemValue = $(event.target).parent('p').siblings('span').children('h6:first-child').text();
      let itemPrice = $(event.target).parent('p').siblings('span').children('h6:last-child').text();
      let itemQuantity = $(event.target).parent('p').text();
      $(td).append(itemValue);
      $(td2).append(itemPrice);
      $(td3).append(itemQuantity);

      $('.sub').text('$' + subTotal().toFixed(2));
      let tax = $('.taxed').text('$' + ($('.sub').text().slice(1) * 0.08995).toFixed(2));
      $('.totaled').text('$' + (+$('.sub').text().slice(1) + Number(tax.text().slice(1))).toFixed(2));
    })
  });
})(jQuery);
