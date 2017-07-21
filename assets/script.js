$(document).ready(function(){
var current = 1;
var max = $("li").length + 1;

$(".quote").hide();
$(".quote:nth-child(1)").fadeIn("slow");

function changeUp(){
  $(".quote").hide();
  current += 1;
  if (current === max){
    current = 1;
  }
$(".quote:nth-child(" + current + ")").fadeIn("slow");
}

function changeDown(){
  $(".quote").hide();
  current -= 1;

  if (current === 0){
    current = max -1;
  }

  $(".quote:nth-child(" + current +")").fadeIn("slow");
}

startChange();

$(".spot2").click(function(){
  stopChange();
  changeUp();
  startChange();
});

$(".spot1").click(function(){
  stopChange();
  changeDown();
  startChange();
});

function startChange(){
  changeIt = setInterval(function(){
    changeUp();
  }, 8000);
};

function stopChange(){
  clearInterval(changeIt);
}


});
