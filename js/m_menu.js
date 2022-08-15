  $(function(){
       //모바일메뉴보이기
        $('.m_btn').click(function(){
           $('.m_menu').slideToggle();
        });
	   //모바일메뉴 스크립트
    	$(".main").click(function(){
		  $(this).find('.sub').slideToggle();
		  $(this).siblings().children('.main').slideUp();
		  return false;
	});
});