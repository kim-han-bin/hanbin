//페이드인아웃
/*
var now=0;
var imgs=2;
start();

function start(){
    $("#slide>a").eq(0).siblings().css({"opacity":"0"});
function fade(){
    now=now==imgs?0:now+=1;
    $("#slide>a").eq(now).css({"opacity":"1"});
    $("#slide>a").eq(now-1).css({"opacity":"0"});};
setInterval(function(){fade();},3000);    
};
*/
//메뉴
$(".menu li").mouseover(function(){
    $(".sub").stop().slideDown("slow", "linear");
});
$(".menu li").mouseleave(function(){
    $(".sub").stop().slideUp("slow", "swing");
});

//슬라이드
/*
setInterval(function(){
    $("#slide>ul").delay(2500);
    $("#slide>ul").animate({marginLeft:"-810px"},1000);
    $("#slide>ul").delay(2500);
    $("#slide>ul").animate({marginLeft:"-1600px"},1000);
    $("#slide>ul").delay(2500);
    $("#slide>ul").animate({marginLeft:"-2400px"},1000);
    $("#slide>ul").delay(2500);
    $("#slide>ul").animate({marginLeft:"-3195px"},1000);
    $("#slide>ul").delay(2500);
    $("#slide>ul").animate({marginLeft:"0px"},1000);
});

$(".pre").click(function(){
    $(".slide li:last").prependTo(".slide");
    $(".slide").css({marginLeft:-800});
    $(".slide").animate({marginLeft:0},500);
});
$(".nex").click(function(){
    $('.slide').animate({marginLeft:-800},function(){
        $(".slide li:first").appendTo(".slide");
        $(".slide").css({marginLeft:0});
    });
});   
*/ 


$(".s2").click(function(){
    $("#slide>ul").animate({marginLeft:"-805px"},1000)
});
$(".s3").click(function(){
    $("#slide>ul").animate({marginLeft:"-1600px"},1000)
});
$(".s4").click(function(){
    $("#slide>ul").animate({marginLeft:"-2400px"},1000)
});
$(".s5").click(function(){
    $("#slide>ul").animate({marginLeft:"-3195px"},1000)
});
$(".s1").click(function(){
    $("#slide>ul").animate({marginLeft:"0px"},1000)
});

//팝업
$(".00").click(function(){
    $(".modala").fadeIn();
});
$(".bt button").click(function(){
    $(".modala").fadeOut();
});
$(".11").click(function(){
    $(".modalb").fadeIn();
});
$(".bt button").click(function(){
    $(".modalb").fadeOut();
});
$(".22").click(function(){
    $(".modalc").fadeIn();
});
$(".bt button").click(function(){
    $(".modalc").fadeOut();
});
$(".aa").click(function(){
    $(".modal1").fadeIn();
});
$(".bt button").click(function(){
    $(".modal1").fadeOut();
});
$(".bb").click(function(){
    $(".modal2").fadeIn();
});
$(".bt button").click(function(){
    $(".modal2").fadeOut();
});
$(".cc").click(function(){
    $(".modal3").fadeIn();
});
$(".bt button").click(function(){
    $(".modal3").fadeOut();
});
$(".dd").click(function(){
    $(".modal4").fadeIn();
});
$(".bt button").click(function(){
    $(".modal4").fadeOut();
});

//이벤트 페이드인
var now=0;
var imgs=2;
start();

function start(){
    $(".event>a").eq(0).siblings().css({"opacity":"0"});
    function fade(){
        now=now==imgs?0:now+=1;
        $(".event>a").eq(now).css({"opacity":"1"});
        $(".event>a").eq(now-1).css({"opacity":"0"});};
setInterval(function(){fade();},3000);};

//추천 코스
$(".right").click(function(){
    $(".place li:last").prependTo(".place");
    $(".place").css({marginLeft:"-380px"});
    $(".place").animate({marginLeft:0},500);
});

$(".left").click(function(){
    $(".place").animate({marginLeft:-380}, function(){
        $(".place li:first").appendTo(".place");
        $(".place").css({marginLeft:0});
    });
});