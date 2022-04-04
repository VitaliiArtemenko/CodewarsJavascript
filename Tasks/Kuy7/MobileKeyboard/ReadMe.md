<h1><a href="https://www.codewars.com/kata/59564a286e595346de000079">Mobile Display Keystrokes</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how many keystrokes you have to do for a specific word.</p>
This is the layout:<br>
<img src="https://raw.githubusercontent.com/zruF/CodewarsData/master/Mobile_phone_keyboard.svg.png" alt="Keyboard">
<p>Return the amount of keystrokes of input <code>str</code> 
(! only letters, digits and special characters in lowercase included in layout without whitespaces !)</p>
<h3>Examples</h3>
<pre>
mobileKeyboard("*#") => 2 (1+1)
mobileKeyboard("123") => 3 (1+1+1)
mobileKeyboard("abc") => 9 (2+3+4)
mobileKeyboard("codewars") => 26 (4+4+2+3+2+2+4+5)
</pre>