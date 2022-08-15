//메뉴 슬라이드 업 다운
    $(document).ready(function(){
        $(".nav>ul>li").hover(function(){
      $(".nav>ul>li>ul, .nav_bg").stop().slideDown();
	},
    function(){
       $(".nav>ul>li>ul, .nav_bg").stop().slideUp();  
}); 
    
//이미지 슬라이드 좌 우/*desktop*/    
    var cIndex = 0;
    var slidePos;   
    setInterval(function(){
        if(cIndex < 4) {
            cIndex ++;
        } else {
            cIndex = 0;
        } 	
		slidePos= cIndex * (-1400) +"px";
        $(".slideList").animate({left: slidePos},300);
},3000);
    
//이미지 슬라이드 좌 우/*tablet*/    
var cIndex = 0;
var slidePos;   
setInterval(function(){
    if(cIndex < 4) {
        cIndex ++;
    } else {
        cIndex = 0;
    } 	
    slidePos= cIndex * (-1200) +"px";
    $(".slideList2").animate({left: slidePos},300);
},3000);

//이미지 슬라이드 좌 우/*mobile*/    
var cIndex = 0;
var slidePos;   
setInterval(function(){
    if(cIndex < 4) {
        cIndex ++;
    } else {
        cIndex = 0;
    } 	
    slidePos= cIndex * (-400) +"px";
    $(".slideList3").animate({left: slidePos},400);
},3000);

// tab 버튼 
    $("#contents .notice li").eq(0).click(function(){
    $(".modal").fadeIn(); 
});
    $("button").click(function(){
    $(".modal").fadeOut(); 
});
    
// .sec-tit을 클릭했을 때
$('.tab .sec-tit').click(function(event){//누르면
        event.preventDefault()
        $('.tab section').removeClass('on')//기존섹션이닫히고
        $(this).parent().addClass('on')//눌럿던게 켜진다
    })
});

// 실시간 슬라이드
    $(document).ready(function(){

            var slideIndex = 0;

            setInterval(function(){
                if(slideIndex > 33){
                    slideIndex = 0;
                };

                $(".box_1").css({"top" : -25 * slideIndex });

                console.log("slideIndex");

                slideIndex++;

            },3000);    
});

// 실시간 슬라이드
    $(document).ready(function(){

            var slideIndex = 0;

            setInterval(function(){
                if(slideIndex > 21){
                    slideIndex = 0;
                };

                $(".box_2").css({"top" : -40 * slideIndex });

                console.log("slideIndex");

                slideIndex++;

            },3000);    
});