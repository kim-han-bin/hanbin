//문서 오픈
$(document).ready(function(){
    $("body").fadeIn(5000);
});

//시작시 팝업
/*
$(document).ready(function(){
    $(".homepop").fadeIn(500);
});
$("body").click(function(){
    $(".homepop").fadeOut(500);
});
*/

//슬라이드 자동이동

setInterval(function(){
    $(".slide2").delay(0);
    $(".slide2").animate({marginLeft:"-3720px"},30000);
    $(".slide2").delay(0);
    $(".slide2").animate({marginLeft:"0px"},30000);    
});


/*
$(".right").click(function(){
   $(".slide").animate({marginLeft:"-780px"},
   function(){
    $(".slide li:first").appendTo(".slide");
    $(".slide").css({marginLeft:-120});
   });
});
*/
/*
//메뉴 배경색 변경
$(".logo").mouseover(function(){
    $("header").css({"background-color":"white"});
});
$(".about").mouseover(function(){
    $("header").css({"background-color":"plum"});
});
$(".design").mouseover(function(){
    $("header").css({"background-color":"orange"});
});
$(".gallery").mouseover(function(){
    $("header").css({"background-color":"powderblue"});
});
$(".connect").mouseover(function(){
    $("header").css({"background-color":"brown"});
});
*/
//사진 간 이동
$(".s2").click(function(){
    $(".slide").animate({marginLeft:"-840px"},1000);
});
$(".s3").click(function(){
    $(".slide").animate({marginLeft:"-1800px"},1000);
});
$(".s4").click(function(){
    $(".slide").animate({marginLeft:"-2760px"},1000);
});
$(".s5").click(function(){
    $(".slide").animate({marginLeft:"-3720px"},1000);
});
$(".s1").click(function(){
    $(".slide").animate({marginLeft:"120px"},1000);
});

//오른쪽으로 슬라이드
$(".scroll").click(function(){
    $(".slide li:first").prependTo(".slide");
    $(".slide").css({"marginLeft":"120px"});
    $(".slide").animate({marginLeft:"-3720px"},10000);
});

//index 소개 시작
/*
$(document).scroll(function(){
    $(".indexshow2").fadeIn(2000);
});
*/

//index 페이드인
var now=0;
var imgs=2;
start();

function start(){
    $("#webfade>a").eq(0).siblings().css({"opacity":"0"});
function fade(){
    now=now==imgs?0:now+=1;
    $("#webfade>a").eq(now).css({"opacity":"1"});
    $("#webfade>a").eq(now-1).css({"opacity":"0"});};
setInterval(function(){fade();},1000);        
};

//사진 팝업

//포스터 팝업
$(".modal").click(function(){
    $(".modal").fadeOut();
});

$(".pic-1").click(function(){
    $(".modal-1").fadeIn();
});
$(".pic-2").click(function(){
    $(".modal-2").fadeIn();
});
$(".pic0").click(function(){
    $(".modal0").fadeIn();
});
$(".pic1").click(function(){
    $(".modal1").fadeIn();
});
$(".pic2").click(function(){
    $(".modal2").fadeIn();
});
$(".pic3").click(function(){
    $(".modal3").fadeIn();
});
$(".pic4").click(function(){
    $(".modal4").fadeIn();
});
$(".pic5").click(function(){
    $(".modal5").fadeIn();
});
$(".pic6").click(function(){
    $(".modal6").fadeIn();
});
$(".pic7").click(function(){
    $(".modal7").fadeIn();
});
$(".pic8").click(function(){
    $(".modal8").fadeIn();
});
$(".pic9").click(function(){
    $(".modal9").fadeIn();
});
$(".pic10").click(function(){
    $(".modal10").fadeIn();
});
$(".pic11").click(function(){
    $(".modal11").fadeIn();
});
$(".pic12").click(function(){
    $(".modal12").fadeIn();
});
$(".pic13").click(function(){
    $(".modal13").fadeIn();
});
$(".pic14").click(function(){
    $(".modal14").fadeIn();
});
$(".pic15").click(function(){
    $(".modal15").fadeIn();
});
$(".pic16").click(function(){
    $(".modal16").fadeIn();
});
$(".pic17").click(function(){
    $(".modal17").fadeIn();
});
$(".pic18").click(function(){
    $(".modal18").fadeIn();
});
$(".pic19").click(function(){
    $(".modal19").fadeIn();
});
$(".pic20").click(function(){
    $(".modal20").fadeIn();
});
$(".pic21").click(function(){
    $(".modal21").fadeIn();
});
$(".pic22").click(function(){
    $(".modal22").fadeIn();
});
$(".pic23").click(function(){
    $(".modal23").fadeIn();
});
$(".pic24").click(function(){
    $(".modal24").fadeIn();
});
$(".pic25").click(function(){
    $(".modal25").fadeIn();
});
$(".pic26").click(function(){
    $(".modal26").fadeIn();
});
$(".pic27").click(function(){
    $(".modal27").fadeIn();
});
$(".pic28").click(function(){
    $(".modal28").fadeIn();
});
$(".pic29").click(function(){
    $(".modal29").fadeIn();
});
$(".pic30").click(function(){
    $(".modal30").fadeIn();
});
$(".pic31").click(function(){
    $(".modal31").fadeIn();
});
$(".pic32").click(function(){
    $(".modal32").fadeIn();
});
$(".pic33").click(function(){
    $(".modal33").fadeIn();
});
$(".pic34").click(function(){
    $(".modal34").fadeIn();
});
$(".pic35").click(function(){
    $(".modal35").fadeIn();
});
$(".pic36").click(function(){
    $(".modal36").fadeIn();
});
$(".pic37").click(function(){
    $(".modal37").fadeIn();
});
$(".pic38").click(function(){
    $(".modal38").fadeIn();
});
$(".pic39").click(function(){
    $(".modal39").fadeIn();
});
$(".pic40").click(function(){
    $(".modal40").fadeIn();
});

