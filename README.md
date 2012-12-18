# jQuery.NatoCallout

NATO Callout Decoder - jQuery plugin

## About

**NatoCallout** takes a string (as the option "decode") and, using the _the NATO phonetic alphabet_*, returns a string with the corresponding callout for each character of the "decode" string. Optionally it will append this string to the selected element(s). This is super useful to help users communicate things like registration codes to others verbally.

## Usage

### String return:
```
var decodeString = $.NatoCallout({'decode': 'This is a test'});
```

### Shortcut:
```
var decodeString = $.NatoCallout('This is a test');
```

Will both set the variable _"decodeString"_ to:

```
Tango Hotel India Sierra -SPACE- India Sierra -SPACE- Alpha -SPACE- Tango Echo Sierra Tango
```

### Append to matching element(s):
```
$('#element').NatoCallout({'decode': 'This is a test'});
```

Will append the following to the element _"element"_:

```
Tango Hotel India Sierra -SPACE- India Sierra -SPACE- Alpha -SPACE- Tango Echo Sierra Tango
```

## Options

Below are the options which can be provided to **NatoCallout** along with their defaults:
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

* **Decode:** the string to decode to *the NATO phonetic alphabet*
* **Prefix:** the text and/or HTML to prepend to each decoded character (default is a *space*)
* **Postfix:** the text and/or HTML to append to each decoded character
* **Include Case:** whether or not to prepend the case of the decoded character to the decode
* **Upper Only:** whether or not to prepend the case of the decoded character to the decode ONLY if it is uppercase (ignored if _includeCase_ is false)
* **Short Case:** whether or not to prepend the case of the decoded character to the decode using the corresponding "short" version (Uppercase = Upper, Lowercase = Lower) (ignored if _includeCase_ is false)

## Options Usage


If we wanted to make a simple list we could add a _postfix_ of say, a line break:

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

```
$('#element').NatoCallout({'decode': 'This is a test', 'prefix': '<li>', 'postfix': '</li>'});
```

```
$('#element').NatoCallout({'decode': 'This is a test', 'prefix': '<tr><td>', 'postfix': '</td></tr>'});
```

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




## References

* http://en.wikipedia.org/wiki/NATO_phonetic_alphabet
