# base29-shortener

A decimal non-negative integer to string shrtnr. 
Two functions to convert your digits into alphanumericals for shorter URLs slugs, timestamps, etc., and back.
Demo: [https://jsfiddle.net/Marko36/k0sd3v7p/](https://bit.ly/3BqA1tc)

### What is this for? Shortening and 'random' obfuscation
The usual conversions from a decimal integer to "anything shorter". 

Besides shortening, it also provides obfuscation: The conversion there and back happens using a secret key. If you keep it secret (e.g. on the backend) conversion from the encoded strings back to integers, without knowing the key, is nearly impossible. Since v0.9, numbers are shortened rendomly to one of several possible strings, depending on the length of the key. So, for a single number you get different results, but the decoding function can safely tell what the original number was, as long as the secret key used for encoding is used.

### Why 29 and lowercase?
The 29 recommended character set used for encoding is based on the usual 36-char set '0123456789abcdefghijklmnopqrstuvwxyz' (10 digits + 26 ASCII), stripped of similar characters (i, l, 1, L, o, 0, O), and lowercase only, for user's comfort (dictating, memorizing..). Useful to avoid confusion should the output strings will be read by humans (URLs). But you can adjust the number of characters as needed and you most likely want to make the key unique by putting them in custom order. See below.

### Should I change the characters used by secret key (`baseKey`)?
If it matters whether someone could tell what number is represented by its short form, and you need to create a unique key. Both chosen character and their order matter. As long as no character is included just once, the character set is up to you. Just make sure to add suitable ones for your scenario. E.g. you want to avoid `?&#`, etc., for URLs. Order of the characters is just as important as their choice.

### Should I change the length of the secret key (`baseKey`)?
Yes. You can change the selected letters and numbers add uppercase chars all you want, as long as they don't repeat. The bigger the character set is, the shorter the output strings (`s`) will be. The difference is more significant with higher input integers (`i`). Making the character set shorter then 10 will turn the shortener into an elongator.

### Why would I want obfuscation using a secret key?
Wesbite scraping prevention is an ideal use case. While images named *0001.jpg, 0002.jpg, 0003.jpg..* are quite easy to scrape thanks to their obvious naming logic, replacing them with something like *gd4f5.jpg, m89c2.jpeg, sd892h.jpg..* provides no obvious pattern, and it would therefore require a LOT of preventable trial and error attempts to try out all the combinations. As a result, you don't need to worry about managing which images are public and which are available linked from pages behind a paywall (for signed-in users).
