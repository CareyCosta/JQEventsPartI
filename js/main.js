$(document).ready(function() {

// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
    $('.switch button').on('click', function() {
      if ($('.switch button').hasClass('on')) {
        $('.switch .on').attr('class', 'off');
        $('body').attr('class', 'dark');
      }
      else {
        $('.switch .off').attr('class', 'on');
        $('body').attr('class', 'light');
      }
  });

// Swap the colors of the body's background and text by adding or removing the dark/light class

});
