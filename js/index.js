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
	setTimeout(function(){
		$('.bg-element-1').addClass('bg-element-one');
		$('.bg-element-2').addClass('bg-element-two');
		$('.bg-element-3').addClass('bg-element-three');
		$('.bg-element-4').addClass('bg-element-four');
		$('.bg-element-5').addClass('bg-element-five');
	},2500)



	// 标题的轮播
	var num1=0;
	var timer1;

	function h1banner(){
		num1++;		
		if(num1>6){
			$('.h1banner ul').css('top',0);
			num1=1;  
		}
		// console.log(num);
		$('.h1banner ul').animate({top:-60*num1+'px'},1000);
		
		timer1=setTimeout(h1banner,2500);
	}
	h1banner();
	
	$(window).resize(function(event){
		var windowh=$(window).height();
		$('.presentation-generale').css('height',windowh+1000);
	})

	var timer2;
	function logo_banner(){
		console.log(-$('.banner-container').offset().left)
		if(-$('.banner-container').offset().left>3140){
			$('.banner-container').css({left:0})
		}

		$('.banner-container').css({left:$('.banner-container').offset().left-1+'px'})
	}
	timer2=setInterval(logo_banner,30);
	$(window).resize(function(event) {
		var w=$(window).width();
		// console.log(w);
		if(w>=767){
			$('.phone').css('animation-name','none');
			setTimeout(function(){
			$('.phone').css('animation-name','floatup');
			},20);
		}
		if(w<=992){
			$('.bg-element-1').css({bottom:'32%'})
			$('.bg-element-2').css({bottom:'37%',right:'6%'})
			$('.bg-element-3').css({bottom:'12%'})
			$('.bg-element-4').css({bottom:'12%'})
			$('.bg-element-5').css({bottom:'41%',left:'5%'})
		}
		else{
			$('.bg-element-1').css({bottom:'24%'})
			$('.bg-element-2').css({bottom:'29%',right:'4%'})
			$('.bg-element-3').css({bottom:'5%'})
			$('.bg-element-4').css({bottom:'-4%'})
			$('.bg-element-5').css({bottom:'38%',left:'0%'})
		}
		
	});
})