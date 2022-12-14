//문제9 스크립트

//아코디언 메뉴
$(".menu li").mouseover(function(){
    $(this).find(".sub li").stop().slideDown();
});
$(".menu li").mouseleave(function(){
    $(this).find(".sub li").stop().slideUp();
});

//탭메뉴
$("#acta").click(function(){
$(".btm .note").show();
$(".btm .gall").hide();
$("#acta").css({"background-color":"white"});
$("#actb").css({"background-color":"silver"});
});
$("#actb").click(function(){
$(".btm .note").hide();
$(".btm .gall").show();
$("#acta").css({"background-color":"silver"});
$("#actb").css({"background-color":"white"});
});
    
//팝업
$(".cc").click(function(){
    $(".modal").show();
});
$(".button button").click(function(){
    $(".modal").hide();
});

//슬라이드
let imgs = 2;
let now = 0;
start();

function start(){
    $("#slide>a").eq(0).siblings().animate({width:"-850px"});
setInterval(function(){
    now=now==imgs?0:now+=1;
    $("#slide>a").eq(now-1).animate({width:"-850px"});
    $("#slide>a").eq(now).animate({width:"850px"});}
,3000);    
};

