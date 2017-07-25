

$(document).ready(function(){
  $("body").hide().fadeIn(1500);

  $('.beans').click(function(){
    $(".beans div").removeClass("active");
    $(this).children("div").addClass("active");
  });
});
