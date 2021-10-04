// Recommend / slick.js
// ==================================================
$(function(){
    $('.works-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        arrows: false,
        centerPadding: '100px',
        centerMode: true,
            responsive: [
                {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: 0,
                centerMode: true,
                }
            }
        ]
    });
});
$(function(){
    $('.youtube-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        arrows: false,
        centerPadding: '100px',
        centerMode: true,
            responsive: [
                {
                breakpoint: 767,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerPadding: 0,
                centerMode: true,
                }
            }
        ]
    });
});

// header > nav
// ==================================================
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

// FAQ
// ==================================================
$(function(){
    $('.js-accordion').on('click',function(){
        $(this).next().slideToggle();
    })
});

// animation / wow.js
// ==================================================
$(function(){
    new WOW().init();
});

$(function(){
	$(window).on('load scroll',function (){
		$('.about-me').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});
$(function(){
	$(window).on('load scroll',function (){
		$('.personal').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});
