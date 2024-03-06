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

    // Magnific Popup code
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
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
});