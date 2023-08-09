//(function(){})();
(function(){

    let hCont=$('.slider_box');
    let hBtn=$('.slider_title li');
    let hIndex;
    
    hCont.slick({
        slidesToShow: 4, //보여질 슬라이드 수
        slidesToScroll: 4,
    });
    
    // 버튼을 클릭하면 해당 index를 찾아서 가기
    hBtn.click(function(e){
        e.preventDefault();
        let target=$(this);//클릭한 그것
        let index = target.index();//클릭한 그것의 index번호
        
       // console.log(index)
    
        if(index == 0){
            hIndex = 0
        }else if(index == 1){
            hIndex = 4
        }else if(index == 2){
            hIndex = 8
        }else if(index == 3){
            hIndex = 12
        }else if(index == 4){
            hIndex = 16
        }
        console.log(hIndex)
        hCont.slick('slickGoTo',hIndex);
    
        hBtn.removeClass('active')
        target.addClass('active')
    })
    


	$(".img-cup").click(function(){
		$(".img-milk").addClass("one-active");
		$(".limiter").addClass("one-limiter-active");
		
	});


    $(window).scroll(function (){
		let scrollTop = $(window).scrollTop();
	if (scrollTop == 0) {
        $(".top-bar").removeClass("hover");
      } else if (scrollTop >= 100) {
        $(".top-bar").addClass("hover");
      }
});




$(".menu-1").mouseenter(function(){
    $(".down_menu").addClass("hover");
});
$(".menu-1").mouseleave(function(){
    $(".down_menu").removeClass("hover");
});




$(".notice-btn").click(function(){
    $(this).addClass("information-active");
    $(".notice-box").addClass("information-active");
    $(".news-btn").removeClass("information-active");
    $(".news-box").removeClass("information-active");
});

$(".news-btn").click(function(){
    $(this).addClass("information-active");
    $(".news-box").addClass("information-active");
    $(".notice-btn").removeClass("information-active");
    $(".notice-box").removeClass("information-active");
});




$('.main_img').slick({
	

	infinite : true,
	slidesToShow : 3,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 3,
	  autoplay : true,            // 자동 스크롤 사용 여부
      autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데
  });

})();
