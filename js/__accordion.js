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

        $this = $(this);

        var defaults = {
            animationDuration: 500,
            animateEasing: 'swing',
            accordionHeading: '.panel-heading',     // Div which we need tracking on click
            accordionCollapse: '.panel-collapse'    // Div which we need to hide or show on click
        };

        var settings = $.extend( {}, defaults, options );


        $('.collapse').on('shown.bs.collapse', function () {
            sessionStorage.setItem(this.id, this.id);
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            sessionStorage.removeItem(this.id, this.id);
        });


        $(".collapse").collapse().each(function() {
            if(isStored(this.id)) {
                $(this).collapse('show');
            }
        });

        // Find storage data
        function isStored(identificator) {
            if(window.sessionStorage.getItem(identificator) == identificator) {
               console.log(identificator);
                return true
            } else {
                return false
            }
        }
    };
}( jQuery ));