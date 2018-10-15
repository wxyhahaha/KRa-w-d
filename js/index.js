$(function(){
	function up(obj){
			$(obj).css('animation-name','floatup');
		}
		up('.phone');
	$(window).scroll(function(event){
		
		var h=$(window).scrollTop();
		
		if(h>=400){
			up('.home-title1');
		}
		if(h>=500){
			$('.wxynav').css({background:'#111111'});
		}
		else{
			$('.wxynav').css({background:'transparent'});
		}
		if(h>=800){
			up('.offre-item')
		}
		if(h>=1700){
			up('.home-title2');
			up('.home-foot-item');
			up('.view-btn');

		}
		if(h>=2200){
			up('.home-title3');
		}
		if(h>=2300){
			
			up('.link-btn');
		}
		if(h>=2400){
			up('.home-title4');
		}
		if(h>=2700){
			up('.exprince-video');
		}
		if(h>=3400){
			up('.home-title5');
		}
		if(h>=3550){
			up('.Ils-item');
		}
		if(h>=4450){
			up('.we-care-content');
		}
		if(h>=5000){
			up('.home-title6');
		}
	})
	$('.bg-element-1').addClass('bg-element-one');
	$('.bg-element-2').addClass('bg-element-two');
	$('.bg-element-3').addClass('bg-element-three');
	$('.bg-element-4').addClass('bg-element-four');
	$('.bg-element-5').addClass('bg-element-five');


	// 标题的轮播
	var num=0;
	var timer1;

	function h1banner(){
		num++;		
		if(num>6){
			$('.h1banner ul').css('top',0);
			num=1;  
		}
		// console.log(num);
		$('.h1banner ul').animate({top:-60*num+'px'},1000);
		
		timer1=setTimeout(h1banner,2500);
	}
	h1banner();
	
	$(window).resize(function(event){
		var windowh=$(window).height();
		$('.presentation-generale').css('height',windowh+1000);
	})
	// var num1=0;
	// var timer2;
	// function logo_banner(){
		
	// 	$('.logo-banner').css('left',++num1+'px');
	// }.
	// timer2=setInterval(logo_banner,6);
	$(window).resize(function(event) {
		var w=$(window).width();
		// console.log(w);
		if(w>=767){
			$('.phone').css('animation-name','none');
			setTimeout(function(){
			$('.phone').css('animation-name','floatup');
			},20)
		}
	});
})