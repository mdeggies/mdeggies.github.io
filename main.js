$(document).ready(function() {

  var scroll_start = 0;
  var startchange = $('.nav-trans');
  var offset = startchange.offset();

  $navText = $('.nav.navbar-nav li a');
  $navBrand = $('.brand');
  $navbar = $('.nav-trans');

  $navText.css('color', 'white');
  $navbar.css('background-color', 'transparent');
  $navbar.css('border', '0px');

  $navBrand.css('color', 'rgba(255,20,147,1)');

  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if (scroll_start > 525) {
      $navbar.css('background-color', 'rgba(255,255,255,1)');
      $navText.css('color', 'rgba(0,0,0,1)');
    }
    else {
      $navbar.css('background-color', 'transparent');
      $navText.css('color', 'rgba(255,255,255,1)');
      $navbar.css('border', '0px');
    }
  });

  $(function() {
    $(".typing").typed({
      strings: ["I love to work with Javascript.",
      "I love to work with Node.",
      "I love to work with Angular.",
      "I love to work with Mongo.",
      "I love to work with Heroku.",
      "I love to work with Express.",
      "I love to work with Bootstrap.",
      "I love to work with jQuery.",
      "I love to work with MySQL.",
      "I love to work with Photoshop.",
      "I love to work with GIMP.",
      "I love to work with Mongoose.",
      "I love to work with Tomcat.",
      "I love to work with Chrome DevTools."],
      typeSpeed: 50
    });
  });
});
