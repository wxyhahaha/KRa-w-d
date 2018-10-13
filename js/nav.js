	$(function(){
		$('.wxynav .navbar-toggle').click(function(){
			$(this).css('background', 'transparent')
			var h=$(document).height();
			console.log(h);
			$('.navdark').css('height',h);
			$('.navdark').slideToggle();
				$('.wxynav .navbar-collapse').css(
					{boxShadow:' none',border:'none'}
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

		$(window).scroll(function(event){
			var h=$(window).scrollTop();
			if(h>=500){
				$('.wxynav').css({background:'#111111'});
			}
			else{
				$('.wxynav').css({background:'transparent'});
			}
		})	
	})
	