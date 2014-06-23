$(document).ready(function() {
    $('.panel-group').accordionWithLinks({
        animationDuration: 400
    });
});


(function( $ ) {
    $.fn.accordionWithLinks = function(options) {
        // Plugin writing in compabilites with bootstrap.js
        // Bootstrap use class 'in' for opened elements and we well use it too

        var defaults = {
            animationDuration: 500,
            animateEasing: 'swing',
            accordionHeading: '.panel-heading',     // Div which we need tracking on click
            accordionCollapse: '.panel-collapse'    // Div which we need to hide or show on click
        };

        var settings = $.extend( {}, defaults, options );


        // Open blocks
        $('.collapse').each(function() {
            var currentID = $(this).attr('id');
            console.log("collapseTest " + currentID);

            var collapsed = window.sessionStorage.getItem('#' + currentID);
            if(collapsed == currentID) {
                $(this).toggle('fast');
            } else {
                console.log('30 line is not working');
                console.log(currentID);
                console.log('H! ' + collapsed);
            }
        });


        // in case of clicking block will be hidden or showed
        $(settings.accordionHeading).on('click', function() {
            $this = $(this);
            var currentCollapsedBlock = $this.next(settings.accordionCollapse);
            currentCollapsedBlock.toggle(settings.animationDuration, settings.animateEasing);
            var currentID = currentCollapsedBlock.attr('id');

            if($this.next().is(':visible') != true) {
                $this.next().addClass('is-opened');
                sessionStorage.setItem(currentID, currentID);
                console.log('visible')
            } else {
                $this.next().addClass('is-closed');
                sessionStorage.setItem(currentID, currentID);
                //sessionStorage.removeItem(currentID, currentID);
                console.log('NOT visible')
            }

            return false;
        });

        // All link in heading accordion block
        var linkInAccordionHeading = settings.accordionHeading + ' ' + 'a' + '[href^=#]';

        $(linkInAccordionHeading).on('click', function(e) {
            e.preventDefault();
            history.pushState({}, '', this.href);
        });


        // Puts hash in variable, and removes the # character
        var hash = window.location.hash.substring(1);

        // Hash found
        if(hash.length > 0) {
            $(linkInAccordionHeading).each(function() {
                $this = $(this);

                if($this.attr('href') == window.location.hash) {
                    $this.closest(settings.accordionHeading).next().toggle('fast');
                }
            });
        }


        // Check Storage in a browser
        if(typeof(Storage) !== 'undefined') {

        } else {
            // Sorry! No Web Storage support..
        }
    };
}( jQuery ));