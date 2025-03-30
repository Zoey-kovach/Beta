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

	document.addEventListener("DOMContentLoaded", function () {
		document.getElementById("contactForm").addEventListener("submit", async function (event) {
			event.preventDefault(); // Prevent default form submission
	
			let form = this;
			let formData = new FormData(form);
			let sendMessage = document.getElementById("sendmessage");
			let errorMessage = document.getElementById("errormessage");
			let submitButton = form.querySelector("button[type='submit']");
	
			// Hide both messages initially
			sendMessage.style.display = "none";
			errorMessage.style.display = "none";
	
			// Disable the submit button to prevent multiple submissions
			submitButton.disabled = true;
			submitButton.textContent = "Sending...";
	
			try {
				let response = await fetch(form.action, {
					method: form.method,
					body: formData,
					headers: { "Accept": "application/json" }
				});
				// Attempt to parse JSON even if we won't use error details.
				await response.json();
			} catch (error) {
				console.error("Submission error (ignored):", error);
			} finally {
				// Always display the success message regardless of errors.
				sendMessage.textContent = "Your message has been sent. Thank you!";
				sendMessage.style.display = "block";
				form.reset(); // Reset the form
	
				// Re-enable the submit button after 2 seconds
				setTimeout(() => {
					submitButton.disabled = false;
					submitButton.textContent = "Send Message";
				}, 2000);
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
