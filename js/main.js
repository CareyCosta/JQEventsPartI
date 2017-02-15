$(document).ready(function() {
    $('.switch button').on('click', function() {
      if ($('.switch button').hasClass('on')) {
        $('.switch .on').attr('class', 'off')
      }
      else {
        $('.switch .off').attr('class', 'on')
      }
  });
});
