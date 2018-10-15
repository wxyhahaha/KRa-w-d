$(function(){
	function up(obj){
		$(obj).css('animation-name','floatup');
	}
	
	up('.head-title');
	up('.phone');
	$(window).scroll(function(event) {
		console.log($(window).scrollTop());
		var h=$(window).scrollTop();
		if(h>=300){
			up('.home-title1');
		}
		if(h>=500){
			up('.home-title2');
		}
		if(h>=800){
			up('.example-floatup1');
			
		}
		if(h>=1500){
			up('.example-floatup2');
		}
		if(h>=1920){
			up('.home-title3');
		}
		if(h>=2350){
			up('.home-title4');
		}
	})
	$('.arrow-dowm').click(function(){
		$('html,body').animate({scrollTop:'750px'},800)
	})

})