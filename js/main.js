let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('empty_notice');
let msgSuccess = document.getElementById('alert-success');

function validateName(){
    let name = document.getElementById('name').value;
    document.getElementById('name-error').style.color = 'red';
    if (name.length == 0) {
        nameError.innerHTML = 'Name required';
        return false;
    }

    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = 'please enter your full name';
        return false;
    }
	nameError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;
    document.getElementById('email-error').style.color = 'red';
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    } 
    if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
	emailError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('tel').value;

    document.getElementById('phone-error').style.color = 'red';
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
	phoneError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('message').value;
    let required = 20;
    let left = required - message.length;
    document.getElementById('message-error').style.color = 'red';

    if (left > 0) {
        messageError.innerHTML = left + 'More charector required';
        return false;
    }

   messageError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateForm() {
    if (!validateName() & !validateEmail() & !validatePhone() & !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fill Required Fields';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    } else {
        msgSuccess.style.display = 'block';
        msgSuccess.innerHTML = 'This is a success alert—check it out!';
    }

    
}








(function ($) {
    "use strict";

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


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

