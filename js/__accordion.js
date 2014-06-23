$(document).ready(function() {
    // Switch off bootsrap data API
    //$(document).off('.data-api');

    // Switch on bootsrap Collapse
    //$('.panel-group').collapse();

    $('.panel-group').accordionWithLinks({
        animationDuration: 400
    });
});


(function( $ ) {
    $.fn.accordionWithLinks = function(options) {
        // Plugin writing in compatibility with bootstrap.js
        // Depend on Bootstrap v3.1.1
        // Bootstrap use class 'in' for opened elements and we well use it too

        var defaults = {
            animationDuration: 500,
            animateEasing: 'swing',
            accordionHeading: '.panel-heading',     // Div which we need tracking on click
            accordionCollapse: '.panel-collapse'    // Div which we need to hide or show on click
        };

        var settings = $.extend( {}, defaults, options );

        sessionStorage.setItem(currentID, currentID);
        window.sessionStorage.getItem('#' + currentID);

    };
}( jQuery ));