$(function(){
	var H=130;
	var W=800;
	function ev(width){
		if(width<=800){
			$('.media img').css({width:$('.text').width()});
			$('.media img').css({height:H-(W-width)/6});
		}
	}
	ev($(window).width())
	$(window).resize(function(event){
		ev($(window).width());

	})
	$('.button').click(function(){
		$('.below-nav').fadeOut(200);
	})
	
})