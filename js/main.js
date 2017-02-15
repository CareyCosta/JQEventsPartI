$(document).ready(function() {

// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)

// Swap the colors of the body's background and text by adding or removing the dark/light class

    $('.switch button').on('click', function() {
      if ($('.switch button').hasClass('on')) {
        $('.switch .on').attr('class', 'off');
        $('body').attr('class', 'dark');
        $('.status').text("It's so bright in here!");
      }
      else {
        $('.switch .off').attr('class', 'on');
        $('body').attr('class', 'light');
        $('.status').text("Hey, who turned the lights off?");
      }
    });
});
