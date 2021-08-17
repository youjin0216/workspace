$(function(){
	$(".thumbs a").click(function(e){
		e.preventDefault();
		var path=$(this).attr("href");
		// console.log(path);
		$("#largeImg > img").attr({"src":path});
		$("#largeImg img").css("opacity", 0).stop().animate({"opacity":1}, 1000);
		return false;
	});
});