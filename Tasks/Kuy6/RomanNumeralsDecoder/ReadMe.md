<h1><a href="https://www.codewars.com/kata/51b6249c4612257ac0000005">Roman Numerals Decoder</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.</p>
<p>Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
starting with the leftmost digit and skipping any 0s. 
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, 
"MDCLXVI", uses each letter in descending order.</p>
<h3>Example:</h3>
<pre>solution('XXI'); // should return 21</pre>
<h3>Help:</h3>
<pre>
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
</pre>