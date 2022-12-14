//star

//서브메뉴
$(".coffee").mouseover(function(){
    $(".subarea").stop().slideDown();
    $(".sub_coffee").show();
    $(".sub_menu").hide();
    $(".coffee").css({"background-color":"firebrick"});
    $(".coffee").css({"font-weight":"bold"});
    $(".coffee").css({"color":"white"});
    $(".menu").css({"background-color":"white"});
    $(".menu").css({"font-weight":"normal"});
    $(".menu").css({"color":"#333"});
});
$(".menu").mouseover(function(){
    $(".subarea").stop().slideDown();
    $(".sub_coffee").hide();
    $(".sub_menu").show();    
    $(".coffee").css({"background-color":"white"});
    $(".coffee").css({"font-weight":"normal"});
    $(".coffee").css({"color":"#333"});
    $(".menu").css({"background-color":"firebrick"});
    $(".menu").css({"font-weight":"bold"});
    $(".menu").css({"color":"white"});
});
$(".subarea").mouseleave(function(){
//커피
    $(".subarea").stop().slideUp();
    $(".menu").css({"background-color":"white"});
    $(".menu").css({"font-weight":"normal"});
    $(".menu").css({"color":"#333"});
//메뉴
    $(".sub_coffee").stop().slideUp();
    $(".coffee").css({"background-color":"white"});
    $(".coffee").css({"font-weight":"normal"});
    $(".coffee").css({"color":"#333"});
});


//프로모션
$(".pro1").click(function(){
    $(".slidebanner").stop().slideDown();
    $(".pro2").show();
    $(".pro1").hide();
});
$(".pro2").click(function(){
    $(".slidebanner").stop().slideUp();
    $(".pro2").hide();
    $(".pro1").show();
});

//슬라이드
/*
setInterval(function(){
    $(".ad>ul").animate({"marginLeft":"-600px"},5000);
    $(".ad>ul").animate({"marginLeft":"0px"},5000);
});
*/

//좌우 슬라이드 버튼 

$(".left_bt").click(function(){
    $(".ad>ul li:last").prependTo(".ad>ul");
    $(".ad>ul").css({"marginLeft":"-1050px"});
    $(".ad>ul").animate({marginLeft:"-260px"});
});
$(".right_bt").click(function(){
    $(".ad>ul").animate({marginLeft:"-1050px"},function(){
        $(".ad>ul li:first").appendTo(".ad>ul");
        $(".ad>ul").css({marginLeft:"-300px"});
    },);
});

//하단 버튼
$(".bt2").click(function(){
    $(".ad>ul").animate({marginLeft:"-270px"},1000);
    $(".bt2").css({"color":"red"});
    $(".bt1").css({"color":"#333"});
    $(".bt3").css({"color":"#333"});
    $(".play").css({"color":"#333"});
});
$(".bt1").click(function(){
    $(".ad>ul").animate({marginLeft:"550px"},1000);
    $(".bt1").css({"color":"red"});
    $(".bt2").css({"color":"#333"});
    $(".bt3").css({"color":"#333"});
    $(".play").css({"color":"#333"});
});

$(".bt3").click(function(){
    $(".ad>ul").animate({marginLeft:"-1100px"},1000);
    $(".bt3").css({"color":"red"});
    $(".bt1").css({"color":"#333"});
    $(".bt2").css({"color":"#333"});
    $(".play").css({"color":"#333"});
});

$(".play").click(function(){
    $(".play").css({"color":"red"});
    $(".bt1").css({"color":"#333"});
    $(".bt2").css({"color":"#333"});
    $(".bt3").css({"color":"#333"});
    $(".ad>ul").delay(1000);
    $(".ad>ul").animate({marginLeft:"550px"},1000);
    $(".ad>ul").delay(1000);
    $(".ad>ul").animate({marginLeft:"-270px"},1000);
    $(".ad>ul").delay(1000);
    $(".ad>ul").animate({marginLeft:"-1100px"},1000);
    $(".ad>ul").delay(1000);
    $(".ad>ul").animate({marginLeft:"-270px"},1000);
    $(".ad>ul").delay(0);
});

//공지사항
var now =0;
var imgs =2;
start();

function start(){
    $(".notice_li>a").eq(0).siblings().css({"opacity":"0"});
setInterval(function(){fade();},3000);}
    function fade(){
    now=now==imgs?0:now+=1;
    $(".notice_li>a").eq(now).css({"opacity":"1"});
    $(".notice_li>a").eq(now-1).css({"opacity":"0"});
};