$(function(){
	// $(".intro").click(function(){
	// 	$(".intro").animate({top:"-100%"},1000);
	// 	$(".main01").delay(500).fadeIn(1000);
	// 	// .css({'transition': 'top 0.5s ease-in-out'});
	// 	$(".toggle img").attr("src","img/menu_g.png");
	// 	$("#wrapper").css({overflow:visible});
	// });

	// /*full page*/
	// var current = 0;
	// var i;
	// function slider(){
	// 	i = (current + 1) % 2
	// 	console.log(i);
	// 	$("#wrapper > div").eq(current).css({top:0}).stop().animate({top:"-100%"});
	// 	$("#wrapper > div").eq(i).css({top:0}).stop().animate({top:"-100%"});
	// 	current = i;
	// }
	// setInterval(slider,3000)
	var current = 0;
	var i;
	var wheel = 0;
	function background(){
		i = (current + 1) % 4;
		console.log(i);
		$('#background li').eq(current).css({top:"0"}).animate({top: "100%"});
		$('#background li').eq(i).css({top:"-100%"}).animate({top: "0%"});
		current = i;
	}
	$(window).mousewheel(function(event,delta){
		console.log(delta);
		if(delta > 0){
			wheel--;
			if(wheel < 0) wheel = 0;
			i = (current + 1) % 4;
			// console.log(i);
			$('#background li').eq(current).css({top:"0"}).stop().animate({top: "100%"});
			$('#background li').eq(i).css({top:"-100%"}).stop().animate({top: "0%"});
			current = i;
		}else if(delta < 0){
			wheel++;
			if(delta == 4) delta = 3;
			i = (current + 1) % 4;
			// console.log(i);
			$('#background li').eq(current).css({top:"0"}).stop().animate({top: "-100%"});
			$('#background li').eq(i).css({top:"100%"}).stop().animate({top: "0%"});
			current = i;
		}
	});
});