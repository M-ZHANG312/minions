//upper_header start//
$(document).ready(function(){
window.onscroll = function() {myFunction()};
  var header = document.getElementById("upper_header_storyline");
  var sticky = header.offsetTop;
  function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
});
//upper_header end//

//cast start//
function showCast(o) {
   var id=o.alt;
   var bio= $("#"+ id). html();
   $("#cast_intro").html(bio);
   $("#cast_characters").css("display", "block");
}
//cast end//

//reviews start//
$(document).ready(function(){
  $("#rewiews_button").hover(function(){
    $("#rewiews_button").css("background-color", "#E67E22");
    $("#rewiews_button").css("color", "white");
    }, function(){
    $("#rewiews_button").css("background-color", "white");
    $("#rewiews_button").css("color", "#E67E22");
  });
});
//reviews end//
