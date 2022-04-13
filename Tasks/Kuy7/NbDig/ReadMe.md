<h1><a href="https://www.codewars.com/kata/566fc12495810954b1000030">Count the Digit</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>Take an integer <code>n (n >= 0)</code> and a digit <code>d (0 <= d <= 9)</code> as an integer.</p>
<p>Square all numbers <code>k (0 <= k <= n)</code> between 0 and n.</p>
<p>Count the numbers of digits <code>d</code> used in the writing of all the <code>k**2</code>.</p>
<p>Call <code>nbDig</code> function taking <code>n</code> and <code>d</code> as parameters and returning this count.</p>
<h3>Examples:</h3>
<pre>
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
</pre>
<p><strong>Note</strong> that 121 has twice the digit 1.</p>