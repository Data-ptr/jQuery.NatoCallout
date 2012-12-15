jQuery.NatoCallout
==============

NATO Callout Decoder - jQuery plugin

About
--------
<b>NatoCallout</b> takes a string (as the option "decode") and, using the *the NATO phonetic alphabet**, appends the corresponding callout for each character to the selected element(s). This is super useful to help users communicate things like registration codes to others verbally.

Usage
-----

<pre>
$('#element').NatoCallout({'decode': 'This is a test'});
</pre>

Will append the following to the element "*element*":
<pre>
Tango Hotel India Sierra -SPACE- India Sierra -SPACE- Alpha -SPACE- Tango Echo Sierra Tango
</pre>

Options
------

Below are the options which can be provided to <b>NatoCallout</b> along with their defaults:
<pre>
{
      'decode'      : 'NatoCallout',
      'prefix'      : ' ',
      'postfix'     : '',
      'includeCase' : false,
      'upperOnly'   : true,
      'shortCase'   : false
}
</pre>

* <b>Decode:</b> the string to decode to *the NATO phonetic alphabet*
* <b>Prefix:</b> the text and/or HTML to prepend to each decoded character (default is a *space*)
* <b>Postfix:</b> the text and/or HTML to append to each decoded character
* <b>Include Case:</b> whether or not to prepend the case of the decoded character to the decode
* <b>Upper Only:</b> whether or not to prepend the case of the decoded character to the decode ONLY if it is uppercase (ignored if *includeCase* is false)
* <b>Short Case:</b> whether or not to prepend the case of the decoded character to the decode using the corresponding "short" version (Uppercase = Upper, Lowercase = Lower) (ignored if *includeCase* is false)

Options Usage
-----

If we wanted to make a simple list we could add a *postfix* of say, a line break:

```
$('#element').NatoCallout({'decode': 'This is a test', 'postfix': '<br />'});
```

Producing:
<pre>
Tango
Hotel
India
Sierra
-SPACE-
India
Sierra
-SPACE-
Alpha
-SPACE-
Tango
Echo
Sierra
Tango
</pre>

We could also get fancy, and do things like insert the callout into an ordered or unordered list, or a table:

```$('#element').NatoCallout({'decode': 'This is a test', 'prefix': '<li>', 'postfix': '</li>'});```

```$('#element').NatoCallout({'decode': 'This is a test', 'prefix': '<tr><td>', 'postfix': '</td></tr>'});```

If element "*element*" were an unordered list, with the first example the output would be:

* Tango
* Hotel
* India
* Sierra
* -SPACE-
* India
* Sierra
* -SPACE-
* Alpha
* -SPACE-
* Tango
* Echo
* Sierra
* Tango




References
----------------
* http://en.wikipedia.org/wiki/NATO_phonetic_alphabet
