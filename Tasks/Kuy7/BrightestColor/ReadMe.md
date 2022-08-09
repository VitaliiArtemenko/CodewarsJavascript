<h1><a href="https://www.codewars.com/kata/62eb800ba29959001c07dfee">Which color is the brightest?</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors
of light are added together in various ways to reproduce a broad array of colors.</p>
<p>One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. 
Value is defined as the largest component of a color:</p>
<pre>V = max(R,G,B)</pre>
<p>You are given a list of colors in 6-digit hexadecimal notation <code>#RRGGBB</code>. Return the brightest of these colors!</p>
<p>For example,</p>
<pre>
brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
</pre>
<p>If there are multiple brightest colors, return the first one:</p>
<pre>brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"</pre>
<p>Note that both input and output should use upper case for characters <code>A, B, C, D, E, F</code>.</p>

