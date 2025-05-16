/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



<script>
// Quote Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.quote-carousel');
    const slides = document.querySelectorAll('.quote-slide');
    const prevBtn = document.querySelector('.prev-quote');
    const nextBtn = document.querySelector('.next-quote');
    const indicators = document.querySelectorAll('.quote-indicator');
    
    let currentIndex = 0;
    let intervalId;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Initialize the carousel
    function initCarousel() {
        startAutoSlide();
        setupEventListeners();
    }
    
    // Start auto-sliding
    function startAutoSlide() {
        intervalId = setInterval(() => {
            showSlide(getNextIndex());
        }, 8000);
    }
    
    // Reset the auto-slide timer
    function resetAutoSlide() {
        clearInterval(intervalId);
        startAutoSlide();
    }
    
    // Show the slide at the specified index
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Get the next slide index
    function getNextIndex() {
        return (currentIndex + 1) % slides.length;
    }
    
    // Get the previous slide index
    function getPrevIndex() {
        return (currentIndex - 1 + slides.length) % slides.length;
    }
    
    // Set up all event listeners
    function setupEventListeners() {
        // Next button click
        nextBtn.addEventListener('click', () => {
            showSlide(getNextIndex());
            resetAutoSlide();
        });
        
        // Previous button click
        prevBtn.addEventListener('click', () => {
            showSlide(getPrevIndex());
            resetAutoSlide();
        });
        
        // Indicator clicks
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = parseInt(indicator.dataset.index);
                showSlide(index);
                resetAutoSlide();
            });
        });
        
        // Pause on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
        });
        
        // Resume on mouse leave
        carousel.addEventListener('mouseleave', startAutoSlide);
        
        // Touch events for mobile swipe
        carousel.addEventListener('touchstart', handleTouchStart, false);
        carousel.addEventListener('touchend', handleTouchEnd, false);
    }
    
    // Handle touch start event
    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(intervalId);
    }
    
    // Handle touch end event
    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        resetAutoSlide();
    }
    
    // Handle swipe gesture
    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;
        
        if (difference > swipeThreshold) {
            // Swipe left, show next slide
            showSlide(getNextIndex());
        } else if (difference < -swipeThreshold) {
            // Swipe right, show previous slide
            showSlide(getPrevIndex());
        }
    }
    
    // Initialize the carousel
    initCarousel();
});
</script>
