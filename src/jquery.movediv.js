(function( $ ) {
    $.fn.moveDiv = function(options) {
        var self = this;
        var timer;
        var settings = $.extend( {
            target: '',
            after: false,
            before: false,
            appendTo: false,
            prependTo: false
        }, options);

        var move = function () {
            if ($(self.selector).length > 0 && $(settings.target).length > 0) {
                if (settings.after) {
                    $(self.selector).insertAfter(settings.target);
                } else if(settings.before) {
                    $(self.selector).insertBefore(settings.target);
                } else if(settings.appendTo) {
                    $(self.selector).appendTo(settings.target);
                } else if(settings.prependTo) {
                    $(self.selector).prependTo(settings.target);
                }   
            }
        }

        var forEach = function () {
            if ($(self.selector).length > 0){
                $(self.selector).each(function() {
                    if (settings.target != '') {
                        move();
                    }
                });
                clearInterval(timer);   
            }
        }

        var init = function () {
            timer = setInterval(function(){ forEach() }, 500);
        }
        
        return init();
    };
})(jQuery);