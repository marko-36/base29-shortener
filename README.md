# base29-shortener

A decimar integer to string shrtnr. Base/radix-29 representation. Two functions to convert your digits into alphanumericals for shorter URLs slugs, timestamps, etc., and back. 

### What is this for?
The usual conversions from a decimal integer to "anything shorter". Besides shortening, it also provides obfuscation: The conversion there a back happens using a unique key. If you keep it secret (e.g. on the backend) conversion from the base-29 encoded strings back to integers, without knowing the key, is nearly impossible (not entirely) in most scenarios.

### Why 29?
The 29 character set used for encoding is based on the usual 36-char set '0123456789abcdefghijklmnopqrstuvwxyz' (10 digits + 26 ASCII), stripped of similar characters (i, l, 1, L, o, 0, O), and lowercase only. Useful to avoid confusion should the output strings will be read by humans (URLs).

### Why lowercase (by default)?
The Base/radix-29 should be sufficient in many typical uses. For user's comfort (reading, memorizing..), Upper/lowercase is avoided. E.g. [http://bit.ly/2U60UuW](http://bit.ly/2U60UuW).

### Can I change the set (array 'c') of 29 characters used in output strings?
Sure, as long as no character is included just once, the character set is up to you. In case

### Can I change the  length of the character set (array 'c') of 29 characters used in output strings?
Yes. You can change the selected letters and numbers add uppercase chars all you want, as long as they don't repeat. The bigger the character set is, the shorter the output strings will be. The difference is more significant with higher input integers ('i'). Likewise, making the character set shorter then 10 will turn the shortener into an elongator.

### Why would I want obfuscation using a secret key?
Wesbite scraping prevention is an ideal use case. While images named *0001.jpg, 0002.jpg, 0003.jpg..* are quite easy to scrape thanks to their obvious naming logic, replacing them with something like *gd4f5.jpg, m89c2.jpeg, sd892h.jpg..* provides no pattern for scraping, and it would therefore require a LOT of preventable trial and error attempts to try out all the combinations. As a result, you don't need to worry about managing which images are public and which are available linked from pages behind a paywall (for signed-in users).
