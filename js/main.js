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