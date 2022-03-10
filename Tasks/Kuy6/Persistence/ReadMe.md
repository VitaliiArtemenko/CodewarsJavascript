<h1><a href="https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec">Persistent Bugger</a></h1>
<h2>6 Kuy</h2>
<hr>
Write a function, <code>persistence</code>, that takes in a positive parameter <code>num</code> 
and returns its multiplicative persistence, which is the number of times you must multiply 
the digits in <code>num</code> until you reach a single digit.
<p>For example (<strong>Input --> Output</strong>):</p>
<pre>
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)

4 --> 0 (because 4 is already a one-digit number)
</pre>