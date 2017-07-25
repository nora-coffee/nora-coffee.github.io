$(document).ready(function(){
  $("body").hide().fadeIn(2000);

  $('.beans').click(function(){
    $(".beans div").removeClass("active");
    $(this).children("div").addClass("active");
  });
});
