$(function () {

        let burger = document.querySelector('.burger');
    burger.addEventListener('click', function(e) {
    burger.classList.toggle('active');
    });

    $('.burger').click(function(){
        $('.menu__collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    })

    $('.menu-opened .menu__item a').click(function(){
        $('.menu__collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    })
    // smooth scroll 

    $(".about__btn, .menu__item a, .mission__btn").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 800,
           easing: "swing"
        });
        return false;
     });

     // modal window
     $('.header__btn, .footer__btn').click(function (e) {
         e.preventDefault();
        $('#exampleModal').arcticmodal({
            closeOnEsc: false,
            overlay: {
                css: {
                    backgroundColor: '#131731',
                    opacity: .66
                }
            }
        });
    
     })


})