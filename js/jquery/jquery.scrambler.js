/*
 * Scrambler: jQuery Plugin for scrambling text
 * @author: @atharvamh
 * @version: 1.0.0
 * @url: https://github.com/atharvamh/jQuery-Scrambler
 */

;(function($) {

    $.scrambler = function(element, options) {

        var plugin = this;
        plugin.settings = {};

        var $element = $(element),
        element = element;
        
        var defaults = {
            effect : "charbychar", // 2 options - charbychar and typing
            keep_whitespaces : true, // true: keep whitespaces, false: fill whitespaces with a random character
            speed : 100,
            duration : 3000,
            final_text: $element.text(),
            reveal: 1000, // number of milliseconds
            total_iterations : 0,
            interval : -1
        }

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            var el = $element;
            var str = plugin.settings.final_text;

            if (plugin.settings.effect == "charbychar" || plugin.settings.effect == "typing"){
              var pos_limit = 0;                                             // randomize text from this position to the end
              var pos_total = str.length;
              var internal_char_reveal_counter = 0;
              plugin.settings.duration = pos_total * plugin.settings.reveal; // calculating duration with reveal

              plugin.settings.interval = setInterval( function(){

                  // changing text character by character effect
                  el.text( scrambler_char_by_char( str, pos_limit, plugin.settings.effect) );

                  plugin.settings.total_iterations += plugin.settings.speed;
                  internal_char_reveal_counter += plugin.settings.speed;

                  // reset to wait for the next reveal and fix the character limit
                  if (internal_char_reveal_counter >= plugin.settings.reveal){
                    internal_char_reveal_counter = 0;
                    pos_limit++;
                  }
                  
                  // end and stop interval
                  if ( plugin.settings.total_iterations >= plugin.settings.duration ) {
                      clearInterval(plugin.settings.interval);
                      plugin.settings.total_iterations = 0;
                      plugin.settings.interval = -1;
                      el.text(str);
                  }
              }, plugin.settings.speed );
            }
        }


        /* get a random character between two limits */

        var scramble_get_random_char = function (max, min){
            var random = Math.floor(Math.random() * (max - min + 1) + min);
            return String.fromCharCode(random);
        }

        /* scramble and reveal characters one by one */

        var scrambler_char_by_char = function(s, poslimit, effect){
          var ret_string = "";
          var fixed_chars = s.substr(0, poslimit);

          for (var c = poslimit; c < s.length; c++){
              if ( s.charCodeAt(c) == 32 && plugin.settings.keep_whitespaces ){
                ret_string += " ";
              }else{
                ret_string += scramble_get_random_char(33, 126);
              }
          }
          if (effect == "typing") ret_string = "|";
          return fixed_chars + ret_string;
        }
        plugin.init();
    }

    $.fn.scrambler = function(options) {
        return this.each(function() {
            var plugin = new $.scrambler(this, options);
            $(this).data('scrambler', plugin);
        });
    }
})(jQuery);
