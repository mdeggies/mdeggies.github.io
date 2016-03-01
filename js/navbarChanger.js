'use strict';

$(document).ready(function() {
  var scroll_start = 0;
  var startchange = $('.nav-trans');
  var offset = startchange.offset();

  var $navText;
  var $navBrand;
  var $navbar;

  $navText = $('.nav.navbar-nav li a');
  $navBrand = $('.brand');
  $navbar = $('.nav-trans');

  $navText.css('color', 'white');
  $navbar.css('background-color', 'transparent');
  $navbar.css('border', '0px');

  $navBrand.css('color', 'rgba(255,20,147,1)');

  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if (scroll_start > 200) {
      $navbar.css('background-color', 'rgba(255,255,255,1)');
      $navText.css('color', 'rgba(0,0,0,1)');
    }
    else {
      $navbar.css('background-color', 'transparent');
      $navText.css('color', 'rgba(255,255,255,1)');
      $navbar.css('border', '0px');
    }
  });
});
