/* v1.2.0
 * jQuery NATO Callout Decoder
 * Copyright 2012 Roger Dicke
 * Released under the MIT and GPL licenses.
 */

(function($){
    $.extend({
        NatoCallout : function(options){
            if(typeof(options) == "string")
            {
                options = {'decode' : options};
            }
            
            var settings = $.extend( {
                'decode'      : 'NatoCallout',
                'prefix'      : ' ',
                'postfix'     : '',
                'includeCase' : false,
                'upperOnly'   : true,
                'shortCase'   : false
            }, options);

            var NC_table =  {   'A': 'Alpha',
                                'B': 'Bravo',
                                'C': 'Charlie',
                                'D': 'Delta ',
                                'E': 'Echo',
                                'F': 'Foxtrot',
                                'G': 'Golf ',
                                'H': 'Hotel',
                                'I': 'India',
                                'J': 'Juliet',
                                'K': 'Kilo',
                                'L': 'Lima',
                                'M': 'Mike',
                                'N': 'November ',
                                'O': 'Oscar',
                                'P': 'Papa',
                                'Q': 'Quebec',
                                'R': 'Romeo',
                                'S': 'Sierra',
                                'T': 'Tango',
                                'U': 'Uniform',
                                'V': 'Victor',
                                'W': 'Whiskey',
                                'X': 'X-ray',
                                'Y': 'Yankee',
                                'Z': 'Zulu',
                                '0': 'Zero',
                                '1': 'One',
                                '2': 'Two',
                                '3': 'Three',
                                '4': 'Four',
                                '5': 'Five',
                                '6': 'Six',
                                '7': 'Seven',
                                '8': 'Eight',
                                '9': 'Nine',
                                '.': '-POINT-',
                                '-': '-DASH-',
                                ' ': '-SPACE-'
                            };

            var decodedCallout = '';

            for (var i = 0; i < settings.decode.length; i++) {
                var character       = settings.decode[i];
                var characterCase   = undefined;
                
                if (settings.includeCase){
                    if (isNaN(character * 1)){
                        if (character == character.toUpperCase()) {
                            if (settings.shortCase){
                                characterCase = 'Upper ';
                            }else{
                                characterCase = 'Uppercase ';
                            }
                        }else if (!settings.upperOnly){
                            if (settings.shortCase){
                                characterCase = 'Lower ';
                            }else{
                                characterCase = 'Lowercase ';
                            }
                        }
                    }
                }

                decodedCallout +=   settings.prefix +
                                    (characterCase ? characterCase : '') +
                                    NC_table[character.toUpperCase()] + 
                                    settings.postfix;
            }

            return decodedCallout;
        }
    });

    $.fn.extend({
        NatoCallout :   function(options){
            var decodedCallout = $.NatoCallout(options);

            return this.each(function() {            
                $(this).append(decodedCallout);
            });
        }
    });
})(jQuery);