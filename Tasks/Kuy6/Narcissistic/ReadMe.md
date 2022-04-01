<h1><a href="https://www.codewars.com/kata/5287e858c6b5a9678200083c">Does my number look big in this?</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>A <a href="https://en.wikipedia.org/wiki/Narcissistic_number">Narcissistic Number</a> is a positive number 
which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).</p>
<p>For example, take 153 (3 digits), which is narcisstic:</p>
<pre>1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153</pre>
<p>and 1652 (4 digits), which isn't:</p>
<pre>1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938</pre>
<h3>Task</h3>
<p>Your code must return <code>true</code> or <code>false</code> (not 'true' and 'false') 
depending upon whether the given number is a Narcissistic number in base 10.</p>
<p>Error checking for text strings or other invalid inputs is not required, 
only valid positive non-zero integers will be passed into the function.</p>