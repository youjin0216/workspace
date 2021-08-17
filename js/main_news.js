$(function () {
  $(".con_right .menu ul li").click(function(){
    $(".con_right .menu ul li").removeClass("on");
    $(this).addClass("on");
  });



  $(".con_right .menu_area ul li:first-child a").click(function(e){
    e.preventDefault();
    $(".con_right .menu_area .menu_text0 .text1").hide();
    $(".con_right .menu_area .menu_text0 .text0").show();
  });
  $(".con_right .menu_area ul li:last-child a").click(function(e){
    e.preventDefault();
    $(".con_right .menu_area .menu_text0 .text0").hide();
    $(".con_right .menu_area .menu_text0 .text1").show();
  });
});
