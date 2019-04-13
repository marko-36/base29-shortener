# base29-shortener
Integer to string shrtnr. Base/radix-29 representation.

Two functions to convert your digits into alphanumericals for shorter URLs, timestamps, etc., and back. 


### Why 29?
The 29 character set used for encoding is the usual 36-char set '0123456789abcdefghijklmnopqrstuvwxyz' (10 digits + 26 ASCII), stripped of similar characters (i, l, 1, L, o, 0, O), and lowercase only. Useful to avoid confusion should the output strings will be read by humans (URLs).

### Why lowercase?
The Base/radix-29 should be sufficient in many typical uses. For user's comfort (reading, memorizing..), Upper/lowercase is avoided. E.g. http://bit.ly/2U60UuW [http://bit.ly/2U60UuW] (http://bit.ly/2U60UuW).

### Can I change the set (array 'c') of 29 characters used in output strings?
Yes. You can change the selected letters and numbers add uppercase chars all you want, as long as they don't repeat. The bigger the character set is, the shorter the output strings will be. The difference is more significant with higher input integers ('i'). Likewise, making the character set shorter then 10 will turn the shortener into an elongator.
