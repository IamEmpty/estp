(function( $ ) {
    $.fn.accordionWithLinks = function(options) {

        var defaults = {
            animationDuration: 500,
            animateEasing: 'swing',
            accordionHeading: '.panel-heading',     // Div which we need tracking on click
            accordionCollapse: '.collapse'          // Div which we need to hide or show on click
        };

        return this.each(function() {
            var settings   = $.extend( {}, defaults, options )
                ,$collapse = $(settings.accordionCollapse, this)
                ,$heading  = $(settings.accordionHeading, this);
            // Uncommit in case of using any another classes instead of 'collapse'
            //$(settings.accordionCollapse).hide();

            $collapse.each(function() {
                $this = $(this);
                var currentID = $this.attr('id');

                if(window.sessionStorage.getItem(currentID) == currentID) {
                    $this.show(settings.animationDuration, settings.animateEasing);
                } else {
                    console.log('23');
                }
            });


            $heading.on('click', function() {
                $this = $(this);
                var targetID = $(this).next().attr('id');

                /*            $this.next().slideToggle(settings.animationDuration);
                 console.log(sessionStorage.getItem(targetID));
                 if(!sessionStorage.getItem(targetID)){
                 sessionStorage.setItem(targetID, targetID);
                 }else{
                 sessionStorage.removeItem(targetID);
                 }*/
                if(!$this.next().is(':visible')) {
                    $this.next().show(settings.animationDuration, settings.animateEasing);
                    sessionStorage.setItem(targetID, targetID);
                } else {
                    $this.next().hide(settings.animationDuration, settings.animateEasing);
                    sessionStorage.removeItem(targetID, targetID);
                }
                $heading.next().not($this.next()).hide(settings.animationDuration, settings.animateEasing);
                sessionStorage.setItem(targetID, targetID);
            });


            // Work with hash
            //

            // Puts hash in variable, and removes the # character
            var hash = window.location.hash.substring(1);

            // All link in heading accordion block
            var linkInAccordionHeading = settings.accordionHeading + ' ' + 'a' + '[href^=#]';

            // Hash found
            if(hash.length > 0) {
                $(linkInAccordionHeading).each(function() {
                    $this = $(this);
                    var targetID = $this.closest(settings.accordionHeading).next().attr('id');

                    if($this.attr('href') == '#'+ hash) {
                        $this.closest(settings.accordionHeading).next().show(settings.animationDuration, settings.animateEasing);
                        sessionStorage.setItem(targetID, targetID);
                    }
                });
            }
        });

    };
}( jQuery ));