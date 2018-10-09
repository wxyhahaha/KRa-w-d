$(function(){
	$('.plus').click(function(){
	$(this).parent().siblings('.faq-collapse-item').slideToggle();
	$(this).parents('.is_collapse').siblings().find('.faq-collapse-item').slideUp();
});
	function up(obj){
		$(obj).css('animation-name','floatup');
	}
	up('.head-title');
	$(window).scroll(function(event) {
		console.log($(window).scrollTop());
		var h=$(window).scrollTop();
		if(h>=200){
			up('.home-title2');
		}
		if(h>=250){
			up('.privileges-card');
		}
		if(h>=700){
			up('.inscrire-1');
		}
		if(h>=1200){
			up('.inscrire-2');
		}
		if(h>=1800){
			up('.home-title3');
		}
		if(h>=2000){
			up('.img-one');
			up('.btn1');

		}
		if(h>=2500){
			up('.img-two');
			up('.btn2');
		}
		if(h>=3100){
			up('.home-title4');

		}
		if(h>=3500){
			up('.home-title5');

		}
		if(h>=3600){
			up('.big-number');
		}
		if(h>=3700){
			up('.title-info');	
		}
		if(h>=3800){
			up('.btn3');
			up('.item-head');
		}
		if(h>=4500){
			up('.btn4');
		}

	});
		$('.arrow-dowm').click(function(){
		$('html,body').animate({scrollTop:'1000px'},800)
	})
})
