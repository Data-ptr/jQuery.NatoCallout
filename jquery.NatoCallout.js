/*
 * jQuery NATO Callout Decoder
 * Copyright 2012 Roger Dicke
 * Released under the MIT and GPL licenses.
 */

(function( $ ){

  $.fn.NatoCallout = function( options ) {  

    var settings = $.extend( {
      'decode'  : 'NatoCallout',
      'prefix'  : '',
      'postfix' : ''
    }, options);

    var NC_table    =  {    'A': 'Alpha',
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
                            '.': 'Point',
                            '-': 'Dash',
                            ' ': 'Space'
                        };

    return this.each(function() {

        for (var i = 0; i < settings.decode.length; i++) {
            $(this).append(options.prefix + NC_table[settings.decode[i].toUpperCase()] + options.postfix);
        };

    });

  };
})( jQuery );



