$(document).ready(function () {

	// VARIABLES
	var $body = $('body');
	var $solar_system = $('.solar_system');
	var $animation_overlay_off = $('.animation_overlay-off');
	var $orbit_line_wrap = $('.orbit-line_wrap');
	var $all_cards = $('.all_cards');
	var $planet_card = $('.planet_card');
	var $planet_card_p = $planet_card.find('p');
	var $button = $('.button');

	var $colapse_button = $('.colapse_button');
	var $play = $('.play');
	var $lines = $('.lines');

	var $mercury_space = $('.mercury_space');
	var $venus_space = $('.venus_space');
	var $earth_space = $('.earth_space');
	var $mars_space = $('.mars_space');
	var $jupiter_space = $('.jupiter_space');
	var $saturn_space = $('.saturn_space');
	var $uranus_space = $('.uranus_space');
	var $neptune_space = $('.neptune_space');

	var $mercury_orbit = $('.mercury_orbit');
	var $venus_orbit = $('.venus_orbit');
	var $earth_orbit = $('.earth_orbit');
	var $mars_orbit = $('.mars_orbit');
	var $jupiter_orbit = $('.jupiter_orbit');
	var $saturn_orbit = $('.saturn_orbit');
	var $uranus_orbit = $('.uranus_orbit');
	var $neptune_orbit = $('.neptune_orbit');

	var $sun_wrap = $('.sun_wrap');
	var $mercury_wrap = $('.mercury_wrap');
	var $venus_wrap = $('.venus_wrap');
	var $earth_wrap = $('.earth_wrap');
	var $mars_wrap = $('.mars_wrap');
	var $jupiter_wrap = $('.jupiter_wrap');
	var $saturn_wrap = $('.saturn_wrap');
	var $uranus_wrap = $('.uranus_wrap');
	var $neptune_wrap = $('.neptune_wrap');

	var $sun = $('.sun');
	var $mercury = $('.mercury');
	var $venus = $('.venus');
	var $earth = $('.earth');
	var $mars = $('.mars');
	var $jupiter = $('.jupiter');
	var $saturn = $('.saturn');
	var $uranus = $('.uranus');
	var $neptune = $('.neptune');

	var $card_sun = $('.card_sun');
	var $card_mercury = $('.card_mercury');
	var $card_venus = $('.card_venus');
	var $card_earth = $('.card_earth');
	var $card_mars = $('.card_mars');
	var $card_jupiter = $('.card_jupiter');
	var $card_saturn = $('.card_saturn');
	var $card_uranus = $('.card_uranus');
	var $card_neptune = $('.card_neptune');

	// PLANET ORBIT ROTATION TOGGLE
	var orbit = ['.mercury_orbit', '.venus_orbit', '.earth_orbit', '.mars_orbit', '.jupiter_orbit', '.saturn_orbit', '.uranus_orbit', '.neptune_orbit'];
	var space = ['.mercury_space', '.venus_space', '.earth_space', '.mars_space', '.jupiter_space', '.saturn_space', '.uranus_space', '.neptune_space'];

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
				$('.animation_overlay, .animation_overlay-off').removeClass('animation_overlay-on');
				$(planet).addClass('orbit-reset');
				setTimeout(function () {
					$(planet).removeClass('orbit-reset');
				}, 100);

			} else if ($(planet).hasClass('orbit-stop')) {

				$('.animation_overlay, .animation_overlay-off').removeClass('animation_overlay-on');
				$(planet).addClass('orbit-reset');
				setTimeout(function () {
					$(planet).removeClass('orbit-reset');
				}, 100);
			}
		});
	});

	// SUN FOCUS TOGGLE
	$('#sun, .close-button_sun').click(function () {

		if ($sun.hasClass('sun_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_sun.removeClass('card_sun-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-still');
			$sun.removeClass('sun_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$mercury_wrap.removeClass('mercury-out-backward').addClass('mercury-in');
			$venus_wrap.removeClass('venus-out-backward').addClass('venus-in');
			$earth_wrap.removeClass('earth-out-backward').addClass('earth-in');
			$mars_wrap.removeClass('mars-out-backward').addClass('mars-in');
			$jupiter_wrap.removeClass('jupiter-out-backward').addClass('jupiter-in');
			$saturn_wrap.removeClass('saturn-out-backward').addClass('saturn-in');
			$uranus_wrap.removeClass('uranus-out-backward').addClass('uranus-in');
			$neptune_wrap.removeClass('neptune-out-backward').addClass('neptune-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_sun.addClass('card_sun-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-still');
			$sun.addClass('sun_focus');

			$mercury_wrap.removeClass('mercury-in').addClass('mercury-out-backward');
			$venus_wrap.removeClass('venus-in').addClass('venus-out-backward');
			$earth_wrap.removeClass('earth-in').addClass('earth-out-backward');
			$mars_wrap.removeClass('mars-in').addClass('mars-out-backward');
			$jupiter_wrap.removeClass('jupiter-in').addClass('jupiter-out-backward');
			$saturn_wrap.removeClass('saturn-in').addClass('saturn-out-backward');
			$uranus_wrap.removeClass('uranus-in').addClass('uranus-out-backward');
			$neptune_wrap.removeClass('neptune-in').addClass('neptune-out-backward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

	// MERCURY FOCUS TOGGLE
	$('#mercury, .close-button_mercury').click(function () {

		if ($mercury.hasClass('mercury_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_mercury.removeClass('card_mercury-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-move');
			$mercury_space.removeClass('planet-space-front');
			$mercury_orbit.removeClass('planet-orbit-focus');
			$mercury.removeClass('mercury_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$sun_wrap.removeClass('sun-out-forward').addClass('sun-in');
			$venus_wrap.removeClass('venus-out-backward').addClass('venus-in');
			$earth_wrap.removeClass('earth-out-backward').addClass('earth-in');
			$mars_wrap.removeClass('mars-out-backward').addClass('mars-in');
			$jupiter_wrap.removeClass('jupiter-out-backward').addClass('jupiter-in');
			$saturn_wrap.removeClass('saturn-out-backward').addClass('saturn-in');
			$uranus_wrap.removeClass('uranus-out-backward').addClass('uranus-in');
			$neptune_wrap.removeClass('neptune-out-backward').addClass('neptune-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_mercury.addClass('card_mercury-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-move');
			$mercury_orbit.addClass('planet-orbit-focus');
			setTimeout(function () {
				$mercury_space.addClass('planet-space-front');
			}, 2000);
			$mercury.addClass('mercury_focus');

			$sun_wrap.removeClass('sun-in').addClass('sun-out-forward');
			$venus_wrap.removeClass('venus-in').addClass('venus-out-backward');
			$earth_wrap.removeClass('earth-in').addClass('earth-out-backward');
			$mars_wrap.removeClass('mars-in').addClass('mars-out-backward');
			$jupiter_wrap.removeClass('jupiter-in').addClass('jupiter-out-backward');
			$saturn_wrap.removeClass('saturn-in').addClass('saturn-out-backward');
			$uranus_wrap.removeClass('uranus-in').addClass('uranus-out-backward');
			$neptune_wrap.removeClass('neptune-in').addClass('neptune-out-backward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide');
					$mercury_space.removeClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

	// VENUS FOCUS TOGGLE
	$('#venus, .close-button_venus').click(function () {

		if ($venus.hasClass('venus_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_venus.removeClass('card_venus-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-move');
			$venus_space.removeClass('planet-space-front');
			$venus_orbit.removeClass('planet-orbit-focus');
			$venus.removeClass('venus_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$sun_wrap.removeClass('sun-out-forward').addClass('sun-in');
			$mercury_wrap.removeClass('mercury-out-forward').addClass('mercury-in');
			$earth_wrap.removeClass('earth-out-backward').addClass('earth-in');
			$mars_wrap.removeClass('mars-out-backward').addClass('mars-in');
			$jupiter_wrap.removeClass('jupiter-out-backward').addClass('jupiter-in');
			$saturn_wrap.removeClass('saturn-out-backward').addClass('saturn-in');
			$uranus_wrap.removeClass('uranus-out-backward').addClass('uranus-in');
			$neptune_wrap.removeClass('neptune-out-forward').addClass('neptune-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_venus.addClass('card_venus-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-move');
			setTimeout(function () {
				$venus_space.addClass('planet-space-front');
			}, 2000);
			$venus_orbit.addClass('planet-orbit-focus');
			$venus.addClass('venus_focus');

			$sun_wrap.removeClass('sun-in').addClass('sun-out-forward');
			$mercury_wrap.removeClass('mercury-in').addClass('mercury-out-forward');
			$earth_wrap.removeClass('earth-in').addClass('earth-out-backward');
			$mars_wrap.removeClass('mars-in').addClass('mars-out-backward');
			$jupiter_wrap.removeClass('jupiter-in').addClass('jupiter-out-backward');
			$saturn_wrap.removeClass('saturn-in').addClass('saturn-out-backward');
			$uranus_wrap.removeClass('uranus-in').addClass('uranus-out-backward');
			$neptune_wrap.removeClass('neptune-in').addClass('neptune-out-backward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide')
					$venus_space.removeClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

	// EARTH FOCUS TOGGLE
	$('#earth, .close-button_earth').click(function () {

		if ($earth.hasClass('earth_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_earth.removeClass('card_earth-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-move');
			$earth_space.removeClass('planet-space-front');
			$earth_orbit.removeClass('planet-orbit-focus');
			$earth.removeClass('earth_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$sun_wrap.removeClass('sun-out-forward').addClass('sun-in');
			$mercury_wrap.removeClass('mercury-out-forward').addClass('mercury-in');
			$venus_wrap.removeClass('venus-out-forward').addClass('venus-in');
			$mars_wrap.removeClass('mars-out-backward').addClass('mars-in');
			$jupiter_wrap.removeClass('jupiter-out-backward').addClass('jupiter-in');
			$saturn_wrap.removeClass('saturn-out-backward').addClass('saturn-in');
			$uranus_wrap.removeClass('uranus-out-backward').addClass('uranus-in');
			$neptune_wrap.removeClass('neptune-out-forward').addClass('neptune-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_earth.addClass('card_earth-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-move');
			setTimeout(function () {
				$earth_space.addClass('planet-space-front');
			}, 2000);
			$earth_orbit.addClass('planet-orbit-focus');
			$earth.addClass('earth_focus');

			$sun_wrap.removeClass('sun-in').addClass('sun-out-forward');
			$mercury_wrap.removeClass('mercury-in').addClass('mercury-out-forward');
			$venus_wrap.removeClass('venus-in').addClass('venus-out-forward');
			$mars_wrap.removeClass('mars-in').addClass('mars-out-backward');
			$jupiter_wrap.removeClass('jupiter-in').addClass('jupiter-out-backward');
			$saturn_wrap.removeClass('saturn-in').addClass('saturn-out-backward');
			$uranus_wrap.removeClass('uranus-in').addClass('uranus-out-backward');
			$neptune_wrap.removeClass('neptune-in').addClass('neptune-out-backward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide')
					$earth_space.removeClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

	// MARS FOCUS TOGGLE
	$('#mars, .close-button_mars').click(function () {

		if ($mars.hasClass('mars_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_mars.removeClass('card_mars-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-move');
			$mars_space.removeClass('planet-space-front');
			$mars_orbit.removeClass('planet-orbit-focus');
			$mars.removeClass('mars_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$sun_wrap.removeClass('sun-out-forward').addClass('sun-in');
			$mercury_wrap.removeClass('mercury-out-forward').addClass('mercury-in');
			$venus_wrap.removeClass('venus-out-forward').addClass('venus-in');
			$earth_wrap.removeClass('earth-out-forward').addClass('earth-in');
			$jupiter_wrap.removeClass('jupiter-out-backward').addClass('jupiter-in');
			$saturn_wrap.removeClass('saturn-out-backward').addClass('saturn-in');
			$uranus_wrap.removeClass('uranus-out-backward').addClass('uranus-in');
			$neptune_wrap.removeClass('neptune-out-forward').addClass('neptune-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_mars.addClass('card_mars-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-move');
			setTimeout(function () {
				$mars_space.addClass('planet-space-front');
			}, 2000);
			$mars_orbit.addClass('planet-orbit-focus');
			$mars.addClass('mars_focus');

			$sun_wrap.removeClass('sun-in').addClass('sun-out-forward');
			$mercury_wrap.removeClass('mercury-in').addClass('mercury-out-forward');
			$venus_wrap.removeClass('venus-in').addClass('venus-out-forward');
			$earth_wrap.removeClass('earth-in').addClass('earth-out-forward');
			$jupiter_wrap.removeClass('jupiter-in').addClass('jupiter-out-backward');
			$saturn_wrap.removeClass('saturn-in').addClass('saturn-out-backward');
			$uranus_wrap.removeClass('uranus-in').addClass('uranus-out-backward');
			$neptune_wrap.removeClass('neptune-in').addClass('neptune-out-backward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide')
					$mars_space.removeClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

	// JUPITER FOCUS TOGGLE
	$('#jupiter, .close-button_jupiter').click(function () {

		if ($jupiter.hasClass('jupiter_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_jupiter.removeClass('card_jupiter-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-move');
			$jupiter_space.removeClass('planet-space-front');
			$jupiter_orbit.removeClass('planet-orbit-focus');
			$jupiter.removeClass('jupiter_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$sun_wrap.removeClass('sun-out-forward').addClass('sun-in');
			$mercury_wrap.removeClass('mercury-out-forward').addClass('mercury-in');
			$venus_wrap.removeClass('venus-out-forward').addClass('venus-in');
			$earth_wrap.removeClass('earth-out-forward').addClass('earth-in');
			$mars_wrap.removeClass('mars-out-forward').addClass('mars-in');
			$saturn_wrap.removeClass('saturn-out-backward').addClass('saturn-in');
			$uranus_wrap.removeClass('uranus-out-backward').addClass('uranus-in');
			$neptune_wrap.removeClass('neptune-out-forward').addClass('neptune-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_jupiter.addClass('card_jupiter-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-move');
			setTimeout(function () {
				$jupiter_space.addClass('planet-space-front');
			}, 2000);
			$jupiter_orbit.addClass('planet-orbit-focus');
			$jupiter.addClass('jupiter_focus');

			$sun_wrap.removeClass('sun-in').addClass('sun-out-forward');
			$mercury_wrap.removeClass('mercury-in').addClass('mercury-out-forward');
			$venus_wrap.removeClass('venus-in').addClass('venus-out-forward');
			$earth_wrap.removeClass('earth-in').addClass('earth-out-forward');
			$mars_wrap.removeClass('mars-in').addClass('mars-out-forward');
			$saturn_wrap.removeClass('saturn-in').addClass('saturn-out-backward');
			$uranus_wrap.removeClass('uranus-in').addClass('uranus-out-backward');
			$neptune_wrap.removeClass('neptune-in').addClass('neptune-out-backward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide')
					$jupiter_space.removeClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

	// SATURN FOCUS TOGGLE
	$('#saturn, .close-button_saturn').click(function () {

		if ($saturn.hasClass('saturn_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_saturn.removeClass('card_saturn-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-move');
			$saturn_space.removeClass('planet-space-front');
			$saturn_orbit.removeClass('planet-orbit-focus');
			$saturn.removeClass('saturn_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$sun_wrap.removeClass('sun-out-forward').addClass('sun-in');
			$mercury_wrap.removeClass('mercury-out-forward').addClass('mercury-in');
			$venus_wrap.removeClass('venus-out-forward').addClass('venus-in');
			$earth_wrap.removeClass('earth-out-forward').addClass('earth-in');
			$mars_wrap.removeClass('mars-out-forward').addClass('mars-in');
			$jupiter_wrap.removeClass('jupiter-out-forward').addClass('jupiter-in');
			$uranus_wrap.removeClass('uranus-out-backward').addClass('uranus-in');
			$neptune_wrap.removeClass('neptune-out-forward').addClass('neptune-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_saturn.addClass('card_saturn-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-move');
			setTimeout(function () {
				$saturn_space.addClass('planet-space-front');
			}, 2000);
			$saturn_orbit.addClass('planet-orbit-focus');
			$saturn.addClass('saturn_focus');

			$sun_wrap.removeClass('sun-in').addClass('sun-out-forward');
			$mercury_wrap.removeClass('mercury-in').addClass('mercury-out-forward');
			$venus_wrap.removeClass('venus-in').addClass('venus-out-forward');
			$earth_wrap.removeClass('earth-in').addClass('earth-out-forward');
			$mars_wrap.removeClass('mars-in').addClass('mars-out-forward');
			$jupiter_wrap.removeClass('jupiter-in').addClass('jupiter-out-forward');
			$uranus_wrap.removeClass('uranus-in').addClass('uranus-out-backward');
			$neptune_wrap.removeClass('neptune-in').addClass('neptune-out-backward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide')
					$saturn_space.removeClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

	// URANUS FOCUS TOGGLE
	$('#uranus, .close-button_uranus').click(function () {

		if ($uranus.hasClass('uranus_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_uranus.removeClass('card_uranus-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-move');
			$uranus_space.removeClass('planet-space-front');
			$uranus_orbit.removeClass('planet-orbit-focus');
			$uranus.removeClass('uranus_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$sun_wrap.removeClass('sun-out-forward').addClass('sun-in');
			$mercury_wrap.removeClass('mercury-out-forward').addClass('mercury-in');
			$venus_wrap.removeClass('venus-out-forward').addClass('venus-in');
			$earth_wrap.removeClass('earth-out-forward').addClass('earth-in');
			$mars_wrap.removeClass('mars-out-forward').addClass('mars-in');
			$jupiter_wrap.removeClass('jupiter-out-forward').addClass('jupiter-in');
			$saturn_wrap.removeClass('saturn-out-forward').addClass('saturn-in');
			$neptune_wrap.removeClass('neptune-out-backward').addClass('neptune-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_uranus.addClass('card_uranus-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-move');
			setTimeout(function () {
				$uranus_space.addClass('planet-space-front');
			}, 2000);
			$uranus_orbit.addClass('planet-orbit-focus');
			$uranus.addClass('uranus_focus');

			$sun_wrap.removeClass('sun-in').addClass('sun-out-forward');
			$mercury_wrap.removeClass('mercury-in').addClass('mercury-out-forward');
			$venus_wrap.removeClass('venus-in').addClass('venus-out-forward');
			$earth_wrap.removeClass('earth-in').addClass('earth-out-forward');
			$mars_wrap.removeClass('mars-in').addClass('mars-out-forward');
			$jupiter_wrap.removeClass('jupiter-in').addClass('jupiter-out-forward');
			$saturn_wrap.removeClass('saturn-in').addClass('saturn-out-forward');
			$neptune_wrap.removeClass('neptune-in').addClass('neptune-out-backward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide')
					$uranus_space.removeClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

	// NEPTUNE FOCUS TOGGLE
	$('#neptune, .close-button_neptune').click(function () {

		if ($neptune.hasClass('neptune_focus')) {

			$solar_system.removeClass('solar_system-focus');
			$orbit_line_wrap.removeClass('orbit-line_wrap-out');
			$all_cards.removeClass('all_cards-in');
			setTimeout(function () {
				$card_neptune.removeClass('card_neptune-in');
				$planet_card.removeClass('planet_card-in');
				$planet_card_p.removeClass('planet_card_p-in');
			}, 500);
			$button.removeClass('button-out');
			$body.removeClass('space_map-move');
			$neptune_space.removeClass('planet-space-front');
			$neptune_orbit.removeClass('planet-orbit-focus');
			$neptune.removeClass('neptune_focus');

			$.each(space, function (i, space) {
				$(space).removeClass('planet-space-out-hide');
			});

			$sun_wrap.removeClass('sun-out-forward').addClass('sun-in');
			$mercury_wrap.removeClass('mercury-out-forward').addClass('mercury-in');
			$venus_wrap.removeClass('venus-out-forward').addClass('venus-in');
			$earth_wrap.removeClass('earth-out-forward').addClass('earth-in');
			$mars_wrap.removeClass('mars-out-forward').addClass('mars-in');
			$jupiter_wrap.removeClass('jupiter-out-forward').addClass('jupiter-in');
			$saturn_wrap.removeClass('saturn-out-forward').addClass('saturn-in');
			$uranus_wrap.removeClass('uranus-out-forward').addClass('uranus-in');

		} else {

			$solar_system.addClass('solar_system-focus');
			$animation_overlay_off.addClass('animation_overlay-on');
			setTimeout(function () {
				$animation_overlay_off.removeClass('animation_overlay-on');
			}, 3000);
			$orbit_line_wrap.addClass('orbit-line_wrap-out');
			$all_cards.addClass('all_cards-in');
			$card_neptune.addClass('card_neptune-in');
			setTimeout(function () {
				$planet_card.addClass('planet_card-in');
				$planet_card_p.addClass('planet_card_p-in');
			}, 2000);
			$button.addClass('button-out');
			$body.addClass('space_map-move');
			setTimeout(function () {
				$neptune_space.addClass('planet-space-front');
			}, 2000);
			$neptune_orbit.addClass('planet-orbit-focus');
			$neptune.addClass('neptune_focus');

			$sun_wrap.removeClass('sun-in').addClass('sun-out-forward');
			$mercury_wrap.removeClass('mercury-in').addClass('mercury-out-forward');
			$venus_wrap.removeClass('venus-in').addClass('venus-out-forward');
			$earth_wrap.removeClass('earth-in').addClass('earth-out-forward');
			$mars_wrap.removeClass('mars-in').addClass('mars-out-forward');
			$jupiter_wrap.removeClass('jupiter-in').addClass('jupiter-out-forward');
			$saturn_wrap.removeClass('saturn-in').addClass('saturn-out-forward');
			$uranus_wrap.removeClass('uranus-in').addClass('uranus-out-forward');

			$.each(space, function (i, space) {
				setTimeout(function () {
					$(space).addClass('planet-space-out-hide')
					$neptune_space.removeClass('planet-space-out-hide');
				}, 4000);
			});
		}
	})

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