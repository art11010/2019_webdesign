$(function(){
	// menu
	$("#menu > ul > li").click(function(){
		var i = $(this).index()+1;
		var position = $("#page"+i).offset();
		// console.log(position);
		$("html").animate({scrollTop:position.top},500)
		$("#pager > ul > li").removeClass("active").eq($(this).index()).addClass("active");
		$(".btn").fadeOut("linear");
	});
	// pager
	$("#pager > ul > li").click(function(){
		var i = $(this).index()+1;
		var position = $("#page"+i).offset();
		// console.log(position);
		$("html").animate({scrollTop:position.top},500);
		$("#pager > ul > li").removeClass("active").eq($(this).index()).addClass("active");
		$(".btn").fadeOut("linear");
	});
	// btn
	var btn = 0;
	var up;
	var down;
	$(".up").click(function(){
		up = (btn + 1) % 4;
		var position = $("#page"+up).offset();
		console.log(up);
		$("html").animate({scrollTop:position.top},500);
		btn = up
	});
	$(".down").click(function(){
		down = (btn + 2) % 4;
		var position = $("#page"+down).offset();
		console.log(down);
		$("html").animate({scrollTop:position.top},500);
		btn = down
	});


	// scroll
	var screen = 0;
	$(window).mousewheel(function(event,delta){
		if(delta > 0){
			if(screen <= 0) screen = 1;
			screen--;
			// console.log(screen);
			var v = $("#wrapper > div").eq(screen).offset().top;
			$("html").stop().animate({scrollTop:v},500);
			$("#pager > ul > li").removeClass("active").eq(screen).addClass("active");
		}else if(delta < 0){
			if(screen >= 3) screen = 3;
			screen++;
			// console.log(screen);
			var v = $("#wrapper > div").eq(screen).offset().top;
			$("html").stop().animate({scrollTop:v},500);
			$("#pager > ul > li").removeClass("active").eq(screen).addClass("active");
		}
	});

	// line
	function line(){
		var winTop = $(this).scrollTop();
		// console.log(winTop);
		if(winTop > 0){
			$("#page1 li").removeClass("active");
			$("#menu a").css({"color":"black"});
			$("#pager a").css({"background-color":"black"});
			$("#menu .logo img").attr({"src":"img/logo_b.png"});
		}else{
			$("#page1 li").eq(0).addClass("active");
			$("#menu a").css({"color":"#d3caa3"});
			$("#pager a").css({"background-color":"#d3caa3"});
			$("#menu .logo img").attr({"src":"img/logo.png"});
		}
	}
	$(window).scroll(function(){
		line();
	});
	line();

	// page3
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$("#main3").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 50;
		$('#main3').css("background-position", newvalueX+"px "+newvalueY+"px");
	});

	// port
	// var current = 0;
	// var i;
	// $("#pagerP p").click(function(){
	// 	var index = $(this).index();
	// 	i = index * "-100" + "vw";
	// 	// console.log(i);
	// 	$("#port").animate({left:i},400);
	// });

	// move
	// function move(){
	// 	u = current * "-100" + "vw";
	// 	// console.log(u);
	// 	$("#port").animate({left:u},300);
	// }
	// $(".next").click(function(){
	// 	if(current <= 4){
	// 		current++;
	// 		if(current == 4){current = 0}
	// 	}
	// 	move();
	// });
	// $(".prev").click(function(){
	// 	if(current >= 0){
	// 		current--;
	// 		if(current == -1){current = 3;}
	// 	}
	// 	move();
	// });



});



//submenu--------------------------------
	// pager submenu
	// $("#pagerP p").click(function(){
	// 	var position = $("#page3").offset();
	// 	$("html").animate({scrollTop:position.top},500);
	// });
	// submenu slide
	// $("#submenu03").mouseenter(function(){
	// 	$("#pagerP").stop().slideDown("linear");
	// }).mouseleave(function(){
	// 	$("#pagerP").stop().slideUp("linear");
	// });
	// $("#pagerP").mouseenter(function(){
	// 	$("#pagerP").stop().slideDown("linear");
	// }).mouseleave(function(){
	// 	$("#pagerP").stop().slideUp("linear");
	// });





// ----------------------------------------------------
// mousewheel
	// $(window).scroll(function(){
	// 	var winTop = $(this).scrollTop();
	// 	var page1 = $("#page1").offset().top-500;
	// 	var page2 = $("#page2").offset().top-500;
	// 	var page3 = $("#page3").offset().top-500;
	// 	var page4 = $("#page4").offset().top-500;
	// 	console.log("1"+page1+"/ 2"+page3);
	// 	if(winTop > page4){
	// 		$("#pager li").removeClass("active");
	// 		$("#pager li").eq(3).addClass("active");
	// 		$(".btn").fadeOut("linear");
	// 	}else if(winTop > page3){
	// 		$("#pager li").removeClass("active");
	// 		$("#pager li").eq(2).addClass("active");
	// 		$(".btn").fadeIn("linear");
	// 	}else if(winTop > page2){
	// 		$("#pager li").removeClass("active");
	// 		$("#pager li").eq(1).addClass("active");
	// 		$(".btn").fadeOut("linear");
	// 	}else{
	// 		$("#pager li").removeClass("active");
	// 		$("#pager li").eq(0).addClass("active");
	// 		$(".btn").fadeOut("linear");
	// 	}
	// });
// scroll 막기
	// $('.intro').on('scroll touchmove mousewheel', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	return false;
	// }); // 막기
	// $('.intro').off('scroll touchmove mousewheel'); // 풀기
// window scroll 막기
	// $('#wrapper').on('scroll touchmove mousewheel', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	return false;
	// });
// pager 줄이기 전
	// $("#btn01").click(function(){
	// 	var position = $("#page1").offset();
	// 	$("html").animate({scrollTop:position.top},500);
	// 	$("#pager li").removeClass("active");
	// 	$("#pager li").eq(0).addClass("active");
	// 	$(".btn").fadeOut("linear");
	// });
// intro
	// $(".intro").click(function(){
	// 	$(".intro").animate({top:"-100%"},1000);
	// 	$(".main01").delay(500).fadeIn(1000);
	// 	// .css({'transition': 'top 0.5s ease-in-out'});
	// 	$(".toggle img").attr("src","img/menu_g.png");
	// 	// $("#wrapper").css({overflow:visible});
	// });