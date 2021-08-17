$(function(){
	$(".schedule_day li").click(function(){
		$(".schedule_day li").removeClass("on");
		$(this).addClass("on");
		

	});
	$(".schedule_day li:first-child").click(function(){
		$(".schedule_cinema2").hide();
		$(".schedule_cinema").fadeOut(300);
		$(".schedule_cinema").fadeIn(300);
	});
	$(".schedule_day li:nth-child(n+2)").click(function(){
		$(".schedule_cinema").hide();
		$(".schedule_cinema2").fadeOut(300);
		$(".schedule_cinema2").fadeIn(300);
	});
});