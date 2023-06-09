$(function(){
    // 메뉴 영역

    $(".sub").hide();

    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({height: "400px"}, 500)

    })//mouseenter

    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({height: "103px"}, 500)
    })//mouseleave

    // 이미지슬라이드 영역

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true,
        
    })


    // section4 이미지슬라이드
    $(".left_move").slick({
				slidesToScroll : 2,		
				speed : 100,	 
				arrows : false, 		
				dots : true, 		
				autoplay : true,			
				autoplaySpeed : 2000, 
    })

    $(".section5_inner li").click(function(e){
        e.preventDefault()
        $(".section5_inner li").toggleClass("on")
    })

})//jquery