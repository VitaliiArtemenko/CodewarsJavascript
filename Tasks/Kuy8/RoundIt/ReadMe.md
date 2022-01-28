<h1><a href="https://www.codewars.com/kata/5732d3c9791aafb0e4001236">Training JS #32: methods of Math---round() ceil() and floor()</a></h1>
<h2>8 Kuy</h2>
<hr>

<h3>Task</h3>
<p>Coding in function <code>roundIt</code>. function accept 1 parameter <code>n</code>. 
It's a number with a decimal point. 
Please use different methods based on the location of the decimal point, turn the number into an integer.</p>
<p>If the decimal point is on the left side of the number 
(that is, the count of digits on the left of the decimal point is less than that on the right), 
use <code>ceil()</code> method.</p>
<pre>roundIt(3.45) should return 4</pre>
<p>If the decimal point is on the right side of the number 
(that is, the count of digits on the left of the decimal point is more than that on the right), 
use <code>floor()</code> method.</p>
<pre>roundIt(34.5) should return 34</pre>
<p>If the decimal point is on the middle of the number 
(that is, the count of digits on the left of the decimal point is equals that on the right), 
use <code>round()</code> method.</p>
<pre>roundIt(34.56) should return 35</pre>


