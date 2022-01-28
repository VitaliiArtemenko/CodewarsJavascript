<h1><a href="https://www.codewars.com/kata/5722fd3ab7162a3a4500031f">Training JS #13: Number object and its properties</a></h1>
<h2>8 Kuy</h2>
<hr/>

<h3>Task</h3>
<p>Coding in function <code>whatNumberIsIt</code>. Function accept 1 parameter:<code>n</code>. It's a number.</p>
<p>To judge the number <code>n</code>. 
If n is one of the above five constants, return one of these string:</p>
<pre>
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
</pre>
<p>Other values should return <code>"Input number is xxx"</code>. xxx means this number.</p>
<p>For example:</p>
<pre>
whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
</pre>

