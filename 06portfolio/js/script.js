$(function(){
	// pager
	$("#btn01").click(function(){
		var position = $("#page1").offset();
		$("html").animate({scrollTop:position.top},500);
	});
	$("#btn02").click(function(){
		var position = $("#page2").offset();
		$("html").animate({scrollTop:position.top},500);
	});
	$("#btn03").click(function(){
		var position = $("#page3").offset();
		$("html").animate({scrollTop:position.top},500);
	});
		$("#pagerP p").click(function(){
			var position = $("#page3").offset();
			$("html").animate({scrollTop:position.top},500);
		});
	$("#btn04").click(function(){
		var position = $("#page4").offset();
		$("html").animate({scrollTop:position.top},500);
	});

	// menu slide
	$("#btn03").mouseenter(function(){
		$("#pagerP").stop().slideDown("linear");
	}).mouseleave(function(){
		$("#pagerP").stop().slideUp("linear");
	});
	$("#pagerP").mouseenter(function(){
		$("#pagerP").stop().slideDown("linear");
	}).mouseleave(function(){
		$("#pagerP").stop().slideUp("linear");
	});


	// scroll
	$('.intro').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	}); // 막기
	// $('.intro').off('scroll touchmove mousewheel');  풀기

	// intro
	$(".intro").click(function(){
		$(".intro").animate({top:"-100%"},1000);
		$(".main01").delay(500).fadeIn(1000);
		// .css({'transition': 'top 0.5s ease-in-out'});
		$(".toggle img").attr("src","img/menu_g.png");
		// $("#wrapper").css({overflow:visible});
	});

	// port
	var current = 0;
	var i;
	$("#pagerP p").click(function(){
		var index = $(this).index();
		i = index * "-100" + "vw";
		// console.log(i);
		$("#port").animate({left:i},400);
	});

	// move
	function move(){
		u = current * "-100" + "vw";
		console.log(u);
		$("#port").animate({left:u},300);
	}
	$(".next").click(function(){
		if(current <= 4){
			current++;
			if(current == 4){current = 0}
		}
		move();
	});
	$(".prev").click(function(){
		if(current >= 0){
			current--;
			if(current == -1){current = 3;}
		}
		move();
	});
});