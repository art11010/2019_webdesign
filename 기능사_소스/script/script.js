$(function(){
    $(".main_menu li").mouseover(function(){
        $(".sub_menu").stop().slideDown();
        $(".s_box").stop().slideDown();
    }).mouseout(function(){
        $(".sub_menu").stop().slideUp();
        $(".s_box").stop().slideUp();
    });
   
    var current = 0;
    var i;
    
    function slider(){
        i=(current+1)%3;
        console.log(i)
        $("#banner a").eq(current).css({left:0}).animate({left:-1200});
        $("#banner a").eq(i).css({left:1200}).animate({left:0});
        
        current = i;
    };
    setInterval(slider,3000);
    
    $(".t_menu h2").click(function(){
        
        var click =$(this).index();
        console.log(click)
        $(".t_menu h2").removeClass("active");
        $(".t_menu h2").eq(click).addClass("active");
        
        $(".t_cont li").removeClass("active");
        $(".t_cont li").eq(click).addClass("active");
    });
    
    $(".click").click(function(){
        $(".popup").show();
        $(".box").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
        $(".box").hide();
    });
});