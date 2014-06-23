$(document).ready(function() {
    $('.panel-group').accordionWithLinks({
        animationDuration: 400
    });

    $('.panel-group2').accordionWithLinks({
        animationDuration: 2000,
        accordionHeading: '.panel-heading'
    });
});