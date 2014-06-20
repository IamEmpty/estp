$(document).ready(function() {
    $('panel-group').accordionWithLinks({
        animationDuration: 400
    });
});


(function( $ ) {
    $.fn.accordionWithLinks = function(options) {

        var defaults = {
            animationDuration: 500,
            animateEasing: 'swing',
            accordionHeading: '.panel-heading',     // Div which we need tracking on click
            accordionCollapse: '.panel-collapse'    // Div which we need to hide or show on click
        };

        var settings = $.extend( {}, defaults, options );


        // in case of clicking block will be hidden or showed
        $(settings.accordionHeading).on('click', function() {
            var currentCollapsedBlock = $(this).next(settings.accordionCollapse);

            currentCollapsedBlock.toggle(settings.animationDuration, settings.animateEasing);
            currentCollapsedBlock.toggleClass('on');

            var AndOnePrepare =  currentCollapsedBlock + ':visible';

            if(currentCollapsedBlock.hasClass('on') == true) {
                var currentID = currentCollapsedBlock.attr('id');
                sessionStorage.setItem('currentID', currentID);
            } else {
                alert('not');
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
        } else {
            // Open block
            var collapsed = window.sessionStorage.getItem('currentID');
            var Prepare = "#" + collapsed;
            $(Prepare).toggle('fast');
        }


        /*jQuery(".toggle_container").toggle($.cookie('showTop') != 'collapsed');
        jQuery("div.question_trigger").click(function() {
            jQuery(this).toggleClass("active").next().toggle();
            var new_value = $(".toggle_container").is(":visible") ? 'expanded' : 'collapsed';
            $.cookie('showTop', new_value);
        });*/




        // Check Storage in a browser
        if(typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.

            /*if($('.collapse').is(':visible') == true) {
                alert('1');
            }*/

            /*$(".collapse").collapse().each(function(){
                if(isStored(this.id)) {
                    $(this).collapse('hide');
                }
            });*/

        } else {
            // Sorry! No Web Storage support..
        }
    };
}( jQuery ));