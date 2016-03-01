'use strict';

$(document).ready(function() {
  /*Typing script*/
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

/*fancy name animation*/
/*$(".fancy_name").lettering();
for (var i=0; i<15; i++) {
//console.log($(".char"+i));
$(".char"+i).on("mouseover", function() {
//console.log('mouseover');
this.className += " animated slideIn";
});
}*/
