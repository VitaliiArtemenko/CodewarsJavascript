<h1><a href="https://www.codewars.com/kata/5ae62fcf252e66d44d00008e">Expressions Matter</a></h1>
<h2>8 Kuy</h2>
<hr>
<h3>Task</h3>

<ul>
<li>Given three integers <code>a</code> ,<code>b</code> ,<code>c</code>, 
<b>return the largest number</b> obtained after inserting the following operators and brackets: 
<code>+</code>, <code>*</code>, <code>()</code></li>
<li>In other words , try every combination of a,b,c with [*+()] , 
and return the <code><b>Maximum Obtained</b></code></li>
</ul>

<h3>Consider an Example:</h3>
<p>With the numbers are 1, 2 and 3 , here are some ways of placing 
signs and brackets:</p>
<ul>
<li><code>1 * (2 + 3) = 5</code></li>
<li><code>1 * 2 * 3 = 6</code></li>
<li><code>1 + 2 * 3 = 7</code></li>
<li><code>(1 + 2) * 3 = 9</code></li>
</ul>
So <b>the maximum value</b> that you can obtain is 9.
<hr>
<h3>Notes</h3>
<ul>
<li>The numbers are always positive.</li>
<li>The numbers are in the range (1 <= a, b, c <= 10).</li>
<li>You can use the same operation more than once.</li>
<li>It's not necessary to place all the signs and brackets.</li>
<li>Repetition in numbers may occur.</li>
<li>You <b>cannot swap the operands</b>. For instance, 
in the given example you cannot get expression <code>(1 + 3) * 2 = 8</code>.</li>
</ul>
<hr>
<h3>Input >> Output Examples:</h3>
<pre>
expressionsMatter(1,2,3)  ==>  return 9
</pre>
<h3>Explanation:</h3>
<p>After placing signs and brackets, 
the <b>Maximum value</b> obtained from the expression <code>(1 + 2) * 3 = 9</code>.</p>
<hr>
<pre>
expressionsMatter(1,1,1)  ==>  return 3
</pre>
<h3>Explanation:</h3>
<p>After placing signs, 
the <b>Maximum value</b> obtained from the expression is <code>1 + 1 + 1 = 3</code>.</p>
<hr>
<pre>
expressionsMatter(9,1,1)  ==>  return 18
</pre>
<h3>Explanation:</h3>
<p>After placing signs and brackets, 
the <b>Maximum value</b> obtained from the expression is <code>9 * (1 + 1) = 18</code>.</p>
<hr>