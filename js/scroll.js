//이미지 페이드인아웃

var now = 0;
var imgs = 2;
start();

function start(){
    $(".fade>a").eq(0).siblings().css({"opacity":"0"});
function fade(){
        now=now==imgs?0:now+=1
    $(".fade>a").eq(now).css({"opacity":"1"});
    $(".fade>a").eq(now-1).css({"opacity":"0"});};
setInterval(function(){fade();},3000);
};

var nows = 0;
var imgz = 2;
end();

function end(){
    $(".slide>a").eq(0).siblings().animate({width:"-950px"});
setInterval(function(){
    nows=nows==imgs?0:imgz+=1;
    $(".slide>a").eq(now-1).animate({width:"-900px"});
    $(".slide>a").eq(now).animate({width:"950px"});}
,3000);};

//자동스크롤

setInterval(function(){
    $(".slideleft").delay(0);
    $(".slideleft").animate({marginLeft:"-1240px"},20000);
    $(".slideleft").delay(0);
    $(".slideleft").animate({marginLeft:"0px"},20000);    
});

setInterval(function(){
    $(".slidepst1").delay(0);
    $(".slidepst1").animate({marginLeft:"-1200px"},30000);
    $(".slidepst1").delay(0);
    $(".slidepst1").animate({marginLeft:"-1000px"},30000);
});
setInterval(function(){
    $(".slidepst2").delay(0);
    $(".slidepst2").animate({marginLeft:"800px"},30000);
    $(".slidepst2").delay(0);
    $(".slidepst2").animate({marginLeft:"0px"},30000);
});
setInterval(function(){
    $(".slidepst3").delay(0);
    $(".slidepst3").animate({marginLeft:"2000px"},30000);
    $(".slidepst3").delay(0);
    $(".slidepst3").animate({marginLeft:"-100px"},30000);
});