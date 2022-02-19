<h1><a href="https://www.codewars.com/kata/604517d65b464d000d51381f">Strange mathematics</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>In a certain kingdom, strange mathematics is taught at school. 
Its main difference from ordinary mathematics is that the numbers in it 
are not ordered in ascending order, but lexicographically, 
as in a dictionary (first by the first digit, 
then, if the first digit is equal, by the second, and so on). 
In addition, we do not consider an infinite set of natural numbers, 
but only the first <code>n</code> numbers.</p>
<p>So, for example, if <code>n = 11</code>, then the numbers in strange mathematics are ordered as follows:</p>
<p><code>1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9</code></p>
<p>Help your students to learn this science: 
write a function that receives two integer numbers:</p> 
<p><code>n</code> (total amount of numbers in strange mathematics) </p>
<p>and <code>k</code> (number from sequence) and returns the location of a given number <code>k</code> 
in the order defined in strange mathematics.</p>
<p>For example, if <code>n = 11</code> and <code>k = 2</code>, the function should return <code>4</code> as the answer.</p>
<p><strong>Input:</strong><code>1 <= n <= 100 000</code>, <code>1 <= k <= n</code></p>
<p><strong>Output:</strong>position of the number <code>k</code> in sequence of the first <code>n</code> natural numbers in lexicographic order. 
Numbering starts with 1.</p>
<p><strong>Examples:</strong></p>
<pre>
strangeMath(<span style="color: darkorange">11, 2</span>) === <span style="color: green">4</span>
strangeMath(<span style="color: darkorange">15, 5</span>) === <span style="color: green">11</span>
strangeMath(<span style="color: darkorange">15, 15</span>) === <span style="color: green">7</span>
</pre>
