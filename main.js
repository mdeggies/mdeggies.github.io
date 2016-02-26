$(document).ready(function() {
  /*Navbar color changer*/
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
  /*fancy name animation*/
  /*$(".fancy_name").lettering();
  for (var i=0; i<15; i++) {
    //console.log($(".char"+i));
    $(".char"+i).on("mouseover", function() {
      //console.log('mouseover');
      this.className += " animated slideIn";
    });
  }*/
  /*Typing script*/
  $(function() {
    $(".typing").typed({
      strings: ["Javascript.",
      "Node.",
      "Angular.",
      "Mongo.",
      "Heroku.",
      "Express.",
      "Bootstrap.",
      "jQuery.",
      "MySQL.",
      "Photoshop.",
      "GIMP.",
      "Mongoose.",
      "Tomcat.",
      "Chrome DevTools."],
      typeSpeed: 100,
      backSpeed: 150,
      startDelay: 850,
      loop: true
    });
  });
});
