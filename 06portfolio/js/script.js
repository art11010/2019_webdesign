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
	$("#btn04").click(function(){
		var position = $("#page4").offset();
		$("html").animate({scrollTop:position.top},500);
	});

	// menu slide
	$("#btn03").mouseenter(function(){
		$("#port").stop().slideDown("linear");
	}).mouseleave(function(){
		$("#port").stop().slideUp("linear");
	});
	$("#port").mouseenter(function(){
		$("#port").stop().slideDown("linear");
	}).mouseleave(function(){
		$("#port").stop().slideUp("linear");
	});

	// port
	$("#port p").click(function(){
		var index = $(this).index() - 1;
		console.log(index);
		// var index2 = $(this).index();
		// $("#page3 > div").eq(index).fadeOut();
		// $("#page3 > div").eq(index2).fadeIn();

		// $("#page3 > div").eq(index).css({left:"0"}).stop().animate({left:"-100vw"})
		// $("#page3 > div").eq(index2).css({left:"100vw"}).stop().animate({left:"0"})
		if( index != index){
			event.preventDefault()
		}else if( index == index ){
			$("#page3 > div").eq(index).css({left:"0"}).stop().animate({left:"-100vw"})
			$("#page3 > div").eq(index2).css({left:"100vw"}).stop().animate({left:"0"})
		}
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
});