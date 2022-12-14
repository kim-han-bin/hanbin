//더놀자 스크립트
/*
$(".ad2").click(function(){
    $("aside>.ad").animate({marginLeft:"-480px"},1000);
});
*/

//▶ 자동 슬라이드
$(document).ready(function(){
    slide();
});    

$(".ab_pre").click(function(){
    $(".ad li:last").prependTo(".ad");
    $(".ad").animate({marginLeft:"0px"},1000);
});

//◀ 왼쪽으로 이동
$(".ab_pre").click(function(){
    $(".ad li:last").prependTo(".ad");
    $(".ad").animate({marginLeft:"0px"},1000);
});
//▶ 오른쪽으로 이동
$(".ab_nex").click(function(){
    $(".ad").animate({marginRight:"-400px"}, 
    function(){
        $(".ad li:first").appendTo(".ad");
        $(".ad").animate({marginLeft:"0px"});
    });
});


function slide(){
setInterval(function(){
    $(".ad").delay(2000);
    $(".ad").animate({marginLeft:"-480px"},2000);
});
setInterval(function(){
    $(".ad").delay(2000);
    $(".ad").animate({marginLeft:"-950px"},2000);
});
setInterval(function(){
    $(".ad").delay(2000);
    $(".ad").animate({marginLeft:"-1430px"},2000);
});
setInterval(function(){
    $(".ad").delay(2000);
    $(".ad").animate({marginLeft:"0px"},1000);
});
};
