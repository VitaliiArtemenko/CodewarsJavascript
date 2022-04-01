<h1><a href="https://www.codewars.com/kata/54b724efac3d5402db00065e">Decode the Morse code</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>In this kata you have to write a simple <a href="https://en.wikipedia.org/wiki/Morse_code">Morse code</a> decoder. 
While the Morse code is now mostly superseded by voice and digital data communication channels, 
it still has its use in some applications around the world.</p>
<p>The Morse code encodes every character as a sequence of "dots" and "dashes". 
For example, the letter <code>A</code> is coded as <code>·−</code>, letter <code>Q</code> is coded as <code>−−·−</code>, 
and digit <code>1</code> is coded as <code>·−−−−</code>. The Morse code is case-insensitive, 
traditionally capital letters are used. When the message is written in Morse code, 
a single space is used to separate the character codes and 3 spaces are used to separate words. 
For example, the message <code>HEY JUDE</code> in Morse code is <code>···· · −·−−   ·−−− ··− −·· ·</code>.</p>
<p><strong>NOTE</strong>: Extra spaces before or after the code have no meaning and should be ignored.</p>
<p>In addition to letters, digits and some punctuation, there are some special service codes, 
the most notorious of those is the international distress signal <a href="https://en.wikipedia.org/wiki/SOS">SOS</a> 
(that was first issued by <a href="https://en.wikipedia.org/wiki/Titanic">Titanic</a>), 
that is coded as <code>···−−−···</code>. 
These special codes are treated as single special characters, and usually are transmitted as separate words.</p>
<p>Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.</p>
<h3>For example:</h3>
<pre>
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
</pre>
<p><strong>NOTE</strong>: For coding purposes you have to use ASCII characters <code>.</code> and <code>-</code>, 
not Unicode characters.</p>
<p>All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions.</p>