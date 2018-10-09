$(function(){
	$(window).scroll(function(event){
		console.log($(window).scrollTop());
		var h=$(window).scrollTop();
		function up(obj){
			$(obj).css('animation-name','floatup');
		}
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
	$('.wxynav .navbar-toggle').click(function(){
		$(this).css('background', 'transparent')
		var h=$(window).height();
		console.log(h);
		$('.wxynav .navbar-collapse').css(
			{height: h,boxShadow:' none',border:'none',background: '#111111'}
			);
		

		$('.icon-bar').eq(1).toggleClass('shrink');

		$('.icon-bar').eq(3).toggleClass('nonewidth');
		
		$('.wxynav .container-fluid').toggleClass('black-noborder-shadow');
		setTimeout(function(){
			$('.icon-bar').eq(0).toggleClass('show-h');
		}, 100)
		setTimeout(function(){
			$('.icon-bar').eq(2).toggleClass('rotate');
			$('.icon-bar').eq(0).toggleClass('rotate');
		}, 500);
	})
	$('.bg-element-1').addClass('bg-element-one');
	$('.bg-element-2').addClass('bg-element-two');
	$('.bg-element-3').addClass('bg-element-three');
	$('.bg-element-4').addClass('bg-element-four');
	$('.bg-element-5').addClass('bg-element-five');


	// 标题的轮播
	var num=0;
	

	function prizebanner(){
		num++;		
		if(num>6){
			$('.h1banner ul').css('top',0);
			num=1;  
		}
		// console.log(num);
		$('.h1banner ul').animate({top:-73*num+'px'},2000);
	}
	setInterval(prizebanner,3000);
	$(window).resize(function(event){
		var windowh=$(window).height();
		$('.presentation-generale').css('height',windowh+1000);
	})

})