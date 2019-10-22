$(function(){
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
			$("#menu > ul > li").removeClass("active").eq(screen).addClass("active");
		}else if(delta < 0){
			if(screen >= 3) screen = 3;
			screen++;
			console.log(screen);
			var v = $("#wrapper > div").eq(screen).offset().top;
			$("html").stop().animate({scrollTop:v},500);
			$("#pager > ul > li").removeClass("active").eq(screen).addClass("active");
			$("#menu > ul > li").removeClass("active").eq(screen).addClass("active");

			$("#pager a").css({"background-color":"#d3caa3"});
			$("#btn p").css({"color":"#d3caa3"});
			$("#btn .line").css({"background-color":"#d3caa3"});
			$(".up img").attr({"src":"img/up.png"});
			$(".down img").attr({"src":"img/down.png"});
		}
	});
// menu
	$("#menu > ul > li").click(function(){
		var i = $(this).index()+1;
		var position = $("#page"+i).offset();
		// console.log(position);
		$("html").animate({scrollTop:position.top},500)
		$("#pager > ul > li").removeClass("active").eq($(this).index()).addClass("active");
		$("#menu > ul > li").removeClass("active").eq($(this).index()).addClass("active");
		$(".btn").fadeOut("linear");
	});
// pager
	$("#pager > ul > li").click(function(){
		var i = $(this).index()+1;
		var position = $("#page"+i).offset();
		// console.log(position);
		$("html").animate({scrollTop:position.top},500);
		$("#pager > ul > li").removeClass("active").eq($(this).index()).addClass("active");
		$("#menu > ul > li").removeClass("active").eq($(this).index()).addClass("active");
		$(".btn").fadeOut("linear");
	});
// btn
	$(".down").click(function(){
		var position = $("#page5").offset();
		// console.log(position);
		$("html").animate({scrollTop:position.top},500);
	});
	$(".up").click(function(){
		var position = $("#page1").offset();
		// console.log(position);
		$("html").animate({scrollTop:position.top},500);
	});

// color
	function color(){
		var winTop = $(this).scrollTop();
		// console.log(winTop);
		if(winTop > 0){
			$("#page1 li").removeClass("active");
			$("#menu a").css({"color":"black"});
			$("#pager a").css({"background-color":"black"});
			$("#menu .logo img").attr({"src":"img/logo_b.png"});

			$("#btn p").css({"color":"black"});
			$("#btn .line").css({"background-color":"black"});
			$(".up img").attr({"src":"img/up_b.png"});
			$(".down img").attr({"src":"img/down_b.png"});
		}else{
			$("#page1 li").eq(0).addClass("active");
			$("#menu a").css({"color":"#d3caa3"});
			$("#pager a").css({"background-color":"#d3caa3"});
			$("#menu .logo img").attr({"src":"img/logo.png"});

			$("#btn p").css({"color":"#d3caa3"});
			$("#btn .line").css({"background-color":"#d3caa3"});
			$(".up img").attr({"src":"img/up.png"});
			$(".down img").attr({"src":"img/down.png"});
		}
	}
	$(window).scroll(function(){
		color();
	});
	color();

// --------------------------------------------------------------
// page1
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$("#main1").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 100;
		$("#main1").css("background-position", newvalueX+"px "+newvalueY+"px");
	});
// page3
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$("#main3").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 + 10;
		$("#main3").css("background-position", newvalueX+"px "+newvalueY+"px");
	});

// page4
// 1
	$("#main4 li").eq(0).mouseenter(function(){
		$("#main4 li").eq(0).find(".box").stop().animate({"width":"100%"});
		$("#main4 li").eq(0).find("img").stop().animate({left:"50%"});
		$("#main4 li").eq(0).find("h2").css({color:"#fff"});
		$("#main4 li").eq(0).find("p").css({color:"#fff"});
		$("#main4 li").eq(0).find("a").css({color:"#fff","border":"1px solid #fff"});
	});
	$("#main4 li").eq(0).mouseleave(function(){
		$("#main4 li").eq(0).find(".box").stop().animate({"width":0});
		$("#main4 li").eq(0).find("img").stop().animate({left:"-110%"});
		$("#main4 li").eq(0).find("h2").css({color:"#ccc"});
		$("#main4 li").eq(0).find(".txt01").css({color:"#000"});
		$("#main4 li").eq(0).find(".txt02").css({color:"#808080"});
		$("#main4 li").eq(0).find("a").css({color:"#808080","border":"1px solid #000"});
	});
	// $("#main4 li").eq(0).find("a").click(function(){
	// 	$("#main4 li").eq(0).find(".box").animate({width:"100vw"}).css({"z-index":1});
	// });
// 2
	$("#main4 li").eq(1).mouseenter(function(){
		$("#main4 li").eq(1).css({"overflow":"visible"});
		$("#main4 li").eq(1).find(".box").stop().animate({"width":"100%"});
		$("#main4 li").eq(1).find("img").show().stop().animate({left:"65%"});
		$("#main4 li").eq(1).find("h2").css({color:"#4d4d4d"});
		$("#main4 li").eq(1).find("p").css({color:"#4d4d4d"});
		$("#main4 li").eq(1).find("a").css({color:"#4d4d4d","border":"1px solid #4d4d4d"});
	});
	$("#main4 li").eq(1).mouseleave(function(){
		$("#main4 li").eq(1).css({"overflow":"hidden"});
		$("#main4 li").eq(1).find(".box").stop().animate({"width":0});
		$("#main4 li").eq(1).find("img").hide().stop().animate({left:"-30%"});
		$("#main4 li").eq(1).find("h2").css({color:"#ccc"});
		$("#main4 li").eq(1).find(".txt01").css({color:"#000"});
		$("#main4 li").eq(1).find(".txt02").css({color:"#808080"});
		$("#main4 li").eq(1).find("a").css({color:"#808080","border":"1px solid #000"});
	});
// 3
	$("#main4 li").eq(2).mouseenter(function(){
		$("#main4 li").eq(2).css({"overflow":"visible"});
		$("#main4 li").eq(2).find(".box").stop().animate({"width":"100%"});
		$("#main4 li").eq(2).find("img").show().stop().animate({left:"70%"});
		$("#main4 li").eq(2).find("h2").css({color:"#fff"});
		$("#main4 li").eq(2).find("p").css({color:"#fff"});
		$("#main4 li").eq(2).find("a").css({color:"#fff","border":"1px solid #fff"});
	});
	$("#main4 li").eq(2).mouseleave(function(){
		$("#main4 li").eq(2).css({"overflow":"hidden"});
		$("#main4 li").eq(2).find(".box").stop().animate({"width":0});
		$("#main4 li").eq(2).find("img").hide().stop().animate({left:"-40%"});
		$("#main4 li").eq(2).find("h2").css({color:"#ccc"});
		$("#main4 li").eq(2).find(".txt01").css({color:"#000"});
		$("#main4 li").eq(2).find(".txt02").css({color:"#808080"});
		$("#main4 li").eq(2).find("a").css({color:"#808080","border":"1px solid #000"});
	});
// 4
	$("#main4 li").eq(3).mouseenter(function(){
		$("#main4 li").eq(3).css({"overflow":"visible"});
		$("#main4 li").eq(3).find(".box").stop().animate({"width":"100%"});
		// $("#main4 li").eq(3).find("img").show().stop().animate({left:"70%"});
		$("#main4 li").eq(3).find("h2").css({color:"#fff"});
		$("#main4 li").eq(3).find(".txt01").css({color:"#fff","text-shadow":"4px 3px 1px #aaa"});
		$("#main4 li").eq(3).find(".txt02").css({color:"#fff"});
		$("#main4 li").eq(3).find("a").css({color:"#fff","border":"1px solid #fff"});
	});
	$("#main4 li").eq(3).mouseleave(function(){
		$("#main4 li").eq(3).css({"overflow":"hidden"});
		$("#main4 li").eq(3).find(".box").stop().animate({"width":0});
		// $("#main4 li").eq(3).find("img").hide().stop().animate({left:"-30%"});
		$("#main4 li").eq(3).find("h2").css({color:"#ccc"});
		$("#main4 li").eq(3).find(".txt01").css({color:"#000","text-shadow":"none"});
		$("#main4 li").eq(3).find(".txt02").css({color:"#808080"});
		$("#main4 li").eq(3).find("a").css({color:"#808080","border":"1px solid #000"});
	});
// mid page
	$("#main4 li").click(function(){
		var num = $(this).index();
		console.log(num);
		var aTag = ".a_"+num;
		console.log(aTag);
		$(aTag).click(function(){
			$("#mid_page li").eq(num).stop().animate({"width":"100%"});
			$("#mid_page li").eq(num).find("h2").show();
			$("#mid_page li").eq(num).find("p").show();
			$("#mid_page li").eq(num).find("a").show();
			$("#mid_page li").eq(num).find("img").show();
			$("#mid_page li").eq(num).find(".close").show();
			// $("#btn .line").css({"background-color":"black"});
		});
		$(".close").eq(num).click(function(){
			$("#mid_page li").stop().animate({"width":0});
			$("#mid_page h2").hide();
			$("#mid_page p").hide();
			$("#mid_page a").hide();
			$("#mid_page img").hide();
			$("#mid_page .close").hide();
		});
	});
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
// btn
	// var current = 0;
	// function move(){
	// 	u = current * "-100" + "vh";
	// 	console.log(u);
	// 	$("#wrapper").animate({"margin-top":u},300);
	// }
	// $(".down").click(function(){
	// 	if(current <= 5){
	// 		current++;
	// 		if(current == 5){current = 4}
	// 	}
	// 	move();
	// });
	// $(".up").click(function(){
	// 	if(current >= 0){
	// 		current--;
	// 		if(current == -1){current = 0;}
	// 	}
	// 	move();
	// });