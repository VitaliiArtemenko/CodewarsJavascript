<h1><a href="https://www.codewars.com/kata/56541980fa08ab47a0000040">Printer Errors</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, 
for the sake of simplicity, are named with letters from a to m.</p>
<p>The colors used by the printer are recorded in a control string. For example a "good" control string 
would be <code>aaabbbbhaijjjm</code> meaning that the printer used three times color a, four times color b, 
one time color h then one time color a and so on</p>
<p>Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced 
e.g. <code>aaaxbbbbyyhwawiwjjjwwm</code> with letters not from a to m.</p>
<p>You have to write a function <code>printerError</code> which given a string will return the error rate of the printer 
as a <strong>string</strong> representing a rational whose numerator is the number of errors and 
the denominator the length of the control string. Don't reduce this fraction to a simpler expression.</p>
<p>The string has a length greater or equal to one and contains only letters from ato z.</p>
<h3>Examples:</h3>
<pre>
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
</pre>