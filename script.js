$(document).ready(function () {

/*Работа меню для мобильной версии*/	
	function activateMobileMenu() {

	/*Открытие-закрытие меню первого уровня по крику*/
		$('.menu-trigger').click(function() {
			$('.menu-1st-level').slideToggle();
			console.log('activateMobileMenu1');
		});

	/*Открытие-закрытие меню второго уровня по крику*/
		$('.menu-1st-level>li>a').click(function() {

			var findMenu = $(this).next();

		/*Закрытие если было активно, снятие стилей активности*/
			if ($(this).is('.active-links-1st')) {
				findMenu.slideUp();
				$(this).removeClass('active-links-1st');
				$(this).find('.arrow').removeClass('active');
			}

		/*Открытие если было неактивно, добавление стилей активности*/
			else {
				findMenu.slideDown();
				$(this).addClass('active-links-1st')
				$(this).find('.arrow').addClass('active');
			}
		});
	
	/*Открытие-закрытие меню третьего уровня по крику*/
		$('.menu-2st-level>li>a').click(function() {
			
			var findMenu = $(this).next();

		/*Закрытие если было активно, снятие стилей активности*/
			if ($(this).is('.active-links-2st')) {
				findMenu.slideUp();
				$(this).removeClass('active-links-2st');
				$(this).find('.hr').removeClass('active');
			}

		/*Открытие если было неактивно, добавление стилей активности*/
			else {
				findMenu.slideDown();
				$(this).addClass('active-links-2st');
				if (findMenu.is(':visible')){
					$(this).find('.hr').addClass('active');
				}
			}
		});
	}

/*Работа меню для десктопной версии*/
	function activateDesktopMenu() {
		$('.menu-1st-level>li>a').hover (
			
			function() {
				$(this).next().stop(false,true).fadeIn(300);

				$('.menu-2st-level>li>a').hover (
				function() {
					$(this).next().stop(false,true).fadeIn(300);
				},
				function() {
					$(this).next().stop(false,true).fadeOut(300);
				});
			}, 

			function hideMenu() {

				$(this).next().stop(false,true).fadeOut(300);
			});
			
		} 


/*Выбор режима меню*/
	function selectMenuMode() {
		
		if ($(window).width() < 768 ) {
			activateMobileMenu();
		}

		else {
			activateDesktopMenu();	
		};
	}

/*Запуск выбора режима меню*/	
	selectMenuMode();


/*Изменение размеров экрана, сброс стилей активности, скрытие второстепенных меню, изменение режима меню*/

	$(window).resize(
		function() {

		/*Сброс обработчика событий*/

			$('.menu-trigger').unbind();
			$('.menu-1st-level').unbind();   
			$('.menu-1st-level>li>a').unbind();
			$('.menu-2st-level>li>a').unbind();

		/*Сброс стилей активности*/
			$('.hr').removeClass('active');
			$('.arrow').removeClass('active');	
			$('.menu-1st-level>li>a').removeClass('active-links-1st');
			$('.menu-2st-level>li>a').removeClass('active-links-2st');


		/*Сворачивание блоков*/
			$('.menu-1st-level').removeAttr('style');
			$('.menu-trigger').removeAttr('style');
			$('.menu-2st-container').removeAttr('style');
			$('.menu-3st-container').removeAttr('style');

		/*Запуск выбора режима меню*/	
			selectMenuMode();
	});
});
