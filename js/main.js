(function ($) {
	'use strict';

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($('#spinner').length > 0) {
				$('#spinner').removeClass('show');
			}
		}, 1);
	};
	spinner();

	// Initiate the wowjs
	new WOW().init();

	// Sticky Navbar
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
		} else {
			$('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
		}
	});

	// Facts counter
	$('[data-toggle="counter-up"]').counterUp({
		delay: 10,
		time: 2000,
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});

	// Testimonials carousel
	$('.testimonial-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 1000,
		dots: true,
		loop: true,
		nav: true,
		navText: [
			'<i class="bi bi-chevron-left"></i>',
			'<i class="bi bi-chevron-right"></i>',
		],
	});
})(jQuery);

// ERROR HANDLING 404
// document.addEventListener('DOMContentLoaded', function () {
// 	// Check if the requested page exists
// 	if (document.body.innerHTML.includes('Page Not Found')) {
// 		// Redirect the user to the custom 404 page
// 		window.location.href = '404.html';
// 	}
// });

// // Cookie Button

// const cookiesBtn = document.querySelector('#cookies-btn');
// const cookiesSection = document.querySelector('#cookies');

// const setCookie = (cName, cValue, expDays) => {
// 	let date = new Date();
// 	date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
// 	const expires = 'expires=' + date.toUTCString();
// 	document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/';
// };

// const getCookie = (cName) => {
// 	const name = cName + '=';
// 	const cDecoded = decodeURIComponent(document.cookie);
// 	const cArr = cDecoded.split('; ');
// 	let value;
// 	cArr.forEach((val) => {
// 		if (val.indexOf(name) === 0) value = val.substring(name.length);
// 	});

// 	return value;
// };

// cookiesBtn.addEventListener('click', () => {
// 	cookiesSection.style.display = 'none';
// 	setCookie('consentCookie', true, 30);
// });

// const cookieMessage = () => {
// 	if (!getCookie('consentCookie')) cookiesSection.style.display = 'block';
// };

// window.addEventListener('load', cookieMessage);
