(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});


	$('#contactForm').on('submit', function(e) {
		e.preventDefault(); // Prevent the default form submission
	
		$.ajax({
			type: 'POST',
			url: $(this).attr('action'), // Use the action attribute of the form
			data: $(this).serialize(), // Serialize form data
			success: function(response) {
				$('#sendmessage').text(response).css({
					"background-color": "#0078ff", 
					"color": "#fff", 
					"padding": "10px",
					"border-radius": "5px",
					"display": "block",
					"text-align": "center",
					"font-weight": "bold",
					"margin-top": "10px",
					"box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.1)"
				}).show(); // Show success message
				$('#errormessage').hide(); // Hide error message
				$('#contactForm')[0].reset(); // Reset the form
			},
			error: function(xhr) {
				// Display a default error message if xhr.responseText is empty
				var errorMessage = xhr.responseText ? xhr.responseText : "An error occurred. Please try again.";
				$('#errormessage').text(errorMessage).css({
					"background-color": "#dc3545", 
					"color": "#fff", 
					"padding": "10px",
					"border-radius": "5px",
					"display": "block",
					"text-align": "center",
					"font-weight": "bold",
					"margin-top": "10px",
					"box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.1)"
				}).show(); // Show error message
				$('#sendmessage').hide(); // Hide success message
			}
		});
	});


	$(document).ready(function() {
		// Function to check if the element is in view
		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();
	
			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();
	
			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}
	
		// Trigger the progress bar animation when the skills section is in view
		$(window).on('scroll', function() {
			$('.progress-bar').each(function() {
				var progressBar = $(this);
				if (isScrolledIntoView(progressBar) && !progressBar.hasClass('animated')) {
					progressBar.css('width', progressBar.attr('aria-valuenow') + '%');
					progressBar.addClass('animated');
				}
			});
		});
	
		// Trigger the animation on page load if the skills section is already in view
		$(window).trigger('scroll');
	});
	
	


})(jQuery);
