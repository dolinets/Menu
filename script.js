$(document).ready(function() {


	if (  $(window).width() < 768 ) {

		$('.menu-trigger').click(function() {
			$('.menu-1st-level').slideToggle(768);
		});

		$('.menu-1st-level>li>a').click(function() {

			var findMenu = $(this).next();

			if ($(this).is('.active-links-1st')) {
				findMenu.slideUp();
				$(this).removeClass('active-links-1st');
				$(this).find('.arrow').removeClass('active');
			}

			else {
				findMenu.slideDown();
				$(this).addClass('active-links-1st')
				$(this).find('.arrow').addClass('active');
			}
		});

		$('.menu-2st-level>li>a').click(function() {
			
			var findMenu = $(this).next();

			if ($(this).is('.active-links-2st')) {
				findMenu.slideUp();
				$(this).removeClass('active-links-2st');
				$(this).find('.hr').removeClass('active');
			}

			else {
				findMenu.slideDown();
				$(this).addClass('active-links-2st');
				if (findMenu.is(':visible')){
					$(this).find('.hr').addClass('active');
				}
			}
		});
	} 

	else {
		$('.menu-1st-level>li>a').hover (function() {
			$(this).next().fadeIn(300);
				$('.menu-2st-level>li>a').hover (function() {
					$(this).next().fadeIn(300);

				}, function() {

				$(this).next().fadeOut(300);

				});



		}, function() {

			$(this).next().stop(false,true).fadeOut(300);


		});





	}

	$(window).resize(function() {		
			if (  $(window).width() > 768 ) {			
				$('.menu-1st-level').removeAttr('style');
				$('.menu-2st-container').hide();
				$('.menu-3st-container').hide();
				$('body').removeClass('active active-links-1st active-links-2st');
			}
	});
});