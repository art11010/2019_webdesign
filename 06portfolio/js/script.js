$(function(){
	$(".intro").click(function(){
		$(".intro").animate({top:"-100%"},1000);
		$(".main01").delay(500).fadeIn(1000);
		// .css({'transition': 'top 0.5s ease-in-out'});
		$(".toggle img").attr("src","img/menu_g.png");
		// $("#wrapper").css({overflow:visible});
	});
});