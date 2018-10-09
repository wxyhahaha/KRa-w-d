$(function(){
	$(window).scroll(function(event){
		console.log($(window).scrollTop());
		var h=$(window).scrollTop();
		function up(obj){
			$(obj).css('animation-name','floatup');
		}

		up('.home-title1');
		if(h>=400){
			up('.deck1');  
		}
		if(h>=500){
			$('.wxynav').css({background:'#111111'});
		}
		else{
			$('.wxynav').css({background:'transparent'});
		}
		if(h>=900){
			up('.home-title2');
		}
		if(h>=1400){
			up('.deck2');
		}

		if(h>=1800){
			up('.home-title3')
		}
		if(h>=2200){
			up('.deck3 .cards');
		}
		if(h>=3600){
			up('.home-title4');
		}
		
	})
	$('.arrow-dowm').click(function(){
		$('html').animate({scrollTop:'700px'})
	})
})