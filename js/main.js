$(document).ready(function () {

	// VARIABLES

	var $solar_system = $('.solar_system');
	var $orbit_line_wrap = $('.orbit-line_wrap');
	var $all_cards = $('.all_cards');
	var $planet_card = $('.planet_card');
	var $planet_card_p = $planet_card.find('p');
	var $button = $('.button');
	var $body = $('body');
	var $animation_overlay_off = $('.animation_overlay-off');

	var $colapse_button = $('.colapse_button');
	var $play = $('.play');
	var $lines = $('.lines');

	// PLANET ORBIT ROTATION TOGGLE
	var planet_in_arr = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
	var orbit = ['.mercury_orbit', '.venus_orbit', '.earth_orbit', '.mars_orbit', '.jupiter_orbit', '.saturn_orbit', '.uranus_orbit', '.neptune_orbit'];
	var space_arr = ['.mercury_space', '.venus_space', '.earth_space', '.mars_space', '.jupiter_space', '.saturn_space', '.uranus_space', '.neptune_space'];

	$.each(orbit, function (i, planet) {

		$('.orbit-start').click(function () {

			if ($(planet).hasClass('orbit-stop')) {

				$(planet).removeClass('orbit-stop');
				$(planet).toggleClass('orbit-start');
				$animation_overlay_off.addClass('animation_overlay-on');
			} else {

				$(planet).removeClass('orbit-start');
				$(planet).toggleClass('orbit-stop');
				$animation_overlay_off.removeClass('animation_overlay-on');
			}
		});
	});


	function planet_focus_toggle(planet) {
		var target = $('.' + planet + ', .close-button_' + planet);

		target.click(function () {
			var this_planet_index = planet_in_arr.findIndex(function (el) {
				return el === planet
			});

			function animationIn() {
				for (var i = 0; i < planet_in_arr.length; i++) {
					var el = planet_in_arr[i];


					if (el === planet) {
						continue;
					}

					if (i < this_planet_index) {
						$('.' + planet_in_arr[i] + '_wrap').removeClass(planet_in_arr[i] + '-in').addClass(planet_in_arr[i] + '-out-forward');
					} else {
						$('.' + planet_in_arr[i] + '_wrap').removeClass(planet_in_arr[i] + '-in').addClass(planet_in_arr[i] + '-out-backward');
					}
				}
			}

			function animationOut() {
				for (var i = 0; i < planet_in_arr.length; i++) {
					var el = planet_in_arr[i];


					if (el === planet) {
						continue;
					}

					if (i < this_planet_index) {
						$('.' + planet_in_arr[i] + '_wrap').removeClass(planet_in_arr[i] + '-out-forward').addClass(planet_in_arr[i] + '-in');
					} else {
						$('.' + planet_in_arr[i] + '_wrap').removeClass(planet_in_arr[i] + '-out-backward').addClass(planet_in_arr[i] + '-in');
					}
				}
			}

			if ($('#' + planet).hasClass(planet + '_focus')) {

				$solar_system.removeClass('solar_system-focus');
				$orbit_line_wrap.removeClass('orbit-line_wrap-out');
				$all_cards.removeClass('all_cards-in');
				setTimeout(function () {
					$('.card_' + planet).removeClass('card_' + planet + '-in');
					$planet_card.removeClass('planet_card-in');
					$planet_card_p.removeClass('planet_card_p-in');
				}, 500);
				$button.removeClass('button-out');
				$body.removeClass('space_map-move');
				$('.' + planet + '_space').removeClass('planet-space-front');
				$('.' + planet + '_orbit').removeClass('planet-orbit-focus');
				$('#' + planet).removeClass(planet + '_focus');

				$.each(space_arr, function (i, space) {
					$(space).removeClass('planet-space-out-hide');
				});

				animationOut();

			} else {
				$solar_system.addClass('solar_system-focus');
				$animation_overlay_off.addClass('animation_overlay-on');
				setTimeout(function () {
					$animation_overlay_off.removeClass('animation_overlay-on');
				}, 3000);
				$orbit_line_wrap.addClass('orbit-line_wrap-out');
				$all_cards.addClass('all_cards-in');
				$('.card_' + planet).addClass('card_' + planet + '-in');
				setTimeout(function () {
					$planet_card.addClass('planet_card-in');
					$planet_card_p.addClass('planet_card_p-in');
				}, 2000);
				$button.addClass('button-out');
				$body.addClass('space_map-move');
				$('.' + planet + '_orbit').addClass('planet-orbit-focus');
				setTimeout(function () {
					$('.' + planet + '_space').addClass('planet-space-front');
				}, 2000);

				$('#' + planet).addClass(planet + '_focus');

				animationIn();

				$.each(space_arr, function (i, space) {
					setTimeout(function () {
						$(space).addClass('planet-space-out-hide');
						$('.' + planet + '_space').removeClass('planet-space-out-hide');
					}, 4000);
				});
			}
		});
	}


	$('.orbit-line').click(function () {

		if ($orbit_line_wrap.hasClass('orbit-line-off')) {

			$orbit_line_wrap.removeClass('orbit-line-off');
		} else {

			$orbit_line_wrap.addClass('orbit-line-off');
		}
	});


	$.each(orbit, function (i, planet) {

		$('.reset-all').click(function () {

			if ($(planet).hasClass('orbit-start')) {

				$(planet).removeClass('orbit-start');
				$(planet).addClass('orbit-stop');
				$('.animation_overlay').removeClass('animation_overlay-on');
				$(planet).addClass('orbit-reset');
				setTimeout(function () {
					$(planet).removeClass('orbit-reset');
				}, 100);

			} else if ($(planet).hasClass('orbit-stop')) {

				$('.animation_overlay').removeClass('animation_overlay-on');
				$(planet).addClass('orbit-reset');
				setTimeout(function () {
					$(planet).removeClass('orbit-reset');
				}, 100);
			}
		});
	});

	$.each(planet_in_arr, function (i, pl) {
		planet_focus_toggle(pl);
	});

	//EXPAND AND COLAPSE CARD
	$colapse_button.click(function () {

		if ($planet_card.hasClass('planet_card-in')) {

			$colapse_button.removeClass('colapse');
			$colapse_button.addClass('expand');
			$planet_card.removeClass('planet_card-in');
			$planet_card_p.removeClass('planet_card_p-in');

		} else {

			$colapse_button.removeClass('expand');
			$colapse_button.addClass('colapse');
			$planet_card.addClass('planet_card-in');
			$planet_card_p.addClass('planet_card_p-in');

		}
	});

	// MENU BUTTONS ICON SWAP
	$('.orbit-start').click(function () {

		if ($play.hasClass('play')) {

			$play.removeClass('play');
			$play.addClass('pause');

		} else {

			$play.removeClass('pause');
			$play.addClass('play');
		}
	});

	$('.orbit-line').click(function () {

		if ($lines.hasClass('lines_on')) {

			$lines.removeClass('lines_on');
			$lines.addClass('lines_off');

		} else {

			$lines.removeClass('lines_off');
			$lines.addClass('lines_on');
		}
	});

	// END OF READY FUNCTION
});

/////////////////////////////////////////////////////////////////////////////////////////////////////