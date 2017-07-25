window.sr = ScrollReveal();
sr.reveal('.logo', 800);
sr.reveal('.logo-image',{delay: 500}, 800);

sr.reveal('.headline', 800);

$(document).ready(function(){
  $(".beans").hover(function(){
    $(".beans-description").fadeIn();
  }, function(){
    $(".beans-description").fadeOut();
  })
});
