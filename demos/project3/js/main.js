$(document).ready(function() {
  // Initialize WOW.js
  new WOW().init();

  // Initialize AOS (if you are using it)
  AOS.init();

  // Initialize Owl Carousel
  $('.owl-carousel').owlCarousel({
      // Your carousel options here
  });

  // Initialize Typed.js
  var typed = new Typed('.element', {
      strings: ["First sentence.", "Second sentence."],
      typeSpeed: 30
  });

  // Other custom initialization code
});


document.addEventListener('DOMContentLoaded', function() {
  new WOW().init();
  
  // Allow animations to complete before restoring overflow
  setTimeout(function() {
      document.body.style.overflow = '';
  }, 1000); // Adjust the timeout duration as needed
});




$(document).ready(function(){
  

  AOS.init();

  $(".owl-carousel").owlCarousel({
    margin: 10,
    mirror: false, 
    disable: 'mobile' ,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true
  });

  var typed = new Typed('#animate-container', {
    strings: [
      '<p class="fs-5">A Web Designer</p>',
      '<p class="fs-5">A Front End Developer</p>',
      '<p class="fs-5">A Video Editor</p>'
    ],
    typeSpeed: 70,
    backSpeed: 20,
    loop: true,
    showCursor: false
  });

  const button = document.getElementById('scrollButton');
  let firstClick = true;

  const scrollToSection = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  button.addEventListener('click', () => {
      if (firstClick) {
          if (window.scrollY === 0) {
              scrollToSection('about');
          } else {
              scrollToSection('home');
          }
          button.classList.remove('hidden');
          button.classList.replace('fa-angle-down', 'fa-angle-up');
          firstClick = false;
      } else {
          scrollToSection('home');
          button.classList.remove('hidden');
          button.classList.replace('fa-angle-up', 'fa-angle-down');
      }
  });

  window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const aboutPosition = document.getElementById('about').offsetTop + window.innerHeight;

      if (scrollPosition >= aboutPosition - 10) {
          button.classList.remove('hidden');
          button.classList.replace('fa-angle-down', 'fa-angle-up');
          firstClick = false;
      } else {
          button.classList.remove('hidden');
          button.classList.replace('fa-angle-up', 'fa-angle-down');
          firstClick = true;
      }
  });

  // Initial check to set the button icon based on the initial scroll position
  const initialScrollPosition = window.scrollY + window.innerHeight;
  const aboutPosition = document.getElementById('about').offsetTop + window.innerHeight;
  if (initialScrollPosition >= aboutPosition - 10) {
      button.classList.remove('hidden');
      button.classList.replace('fa-angle-down', 'fa-angle-up');
  }

  let skillsSection = document.querySelector('#skills-section');
            skillsSection.addEventListener('click', function() {
                animateProgressBars();
            });

          
            
       
});

  
        $(document).ready(function() {
            $('.btn.btn-dark').on('click', function() {
              const $moreContent = $('.more-content');
              if ($moreContent.is(':hidden')) {
                $moreContent.slideDown();
                $(this).text('Read less');
              } else {
                $moreContent.slideUp();
                $(this).text('Read more');
              }
            });
        
            // Hide button on large screens
            const mediaQuery = window.matchMedia('(min-width: 768px)');
            mediaQuery.addEventListener('change', (e) => {
              if (e.matches) {
                $('.btn.btn-dark').prop('disabled', true);
              } else {
                $('.btn.btn-dark').prop('disabled', false);
              }
            });


        
          });


          document.getElementById('contact-form').addEventListener('submit', function(event) {
            // Allow the form to be submitted
            setTimeout(() => {
                // Reset the form after a short delay
                event.target.reset();
            }, 510); // Adjust the delay if necessary
        });

        document.getElementById('contact-form').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent default form submission
      
          const form = event.target;
          const formData = new FormData(form);
      
          fetch(form.action, {
              method: form.method,
              body: formData
          }).then(response => {
              form.reset(); // Reset form fields upon submission attempt
              displayMessage("success", "Your message has been sent successfully!");
          }).catch(error => {
              console.error('Error:', error);
              // Display success message even on error
              displayMessage("success", "Your message has been sent successfully!");
          });
      });
      
      function displayMessage(type, message) {
          const messageContainer = document.getElementById('message-container');
          messageContainer.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
          
          // Automatically hide the message after 3 seconds (3000 milliseconds)
          setTimeout(function() {
              messageContainer.innerHTML = '';
          }, 3000); // Adjust timeout as needed
      }
      
      document.addEventListener('DOMContentLoaded', function() {
        var menu = document.querySelector('.off-canvas-menu');
        var toggleIcon = document.querySelector('.toggle-icon');
        var closeIcon = document.querySelector('.close-icon');
    
        toggleIcon.addEventListener('click', function() {
            menu.classList.add('open');
        });
    
        closeIcon.addEventListener('click', function() {
            menu.classList.remove('open');
        });
    
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !toggleIcon.contains(event.target)) {
                menu.classList.remove('open');
            }
        });




    });
    

