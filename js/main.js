$(document).ready(function(){

    // Função para filtrar os projetos de acordo com a categoria
    // init Isotope
    let $grid = $('.grid').isotope({
        // options
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function() {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({filter : filterValue});
    });

    // Owl carousel initialization
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            544: {
                items: 3
            }
        }
    });

    // sticky navigation menu
    let nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed() {
        if ($('.header-area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar-fixed');
                } else {
                    $('.header-area .main-menu').removeClass('navbar-fixed');
                }
            });
        };
    };

    navbarFixed();

});