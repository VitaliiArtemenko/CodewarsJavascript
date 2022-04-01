<h1><a href="https://www.codewars.com/kata/51c8e37cee245da6b40000bd">Strip Comments</a></h1>
<h2>4 Kuy</h2>
<hr>
<p>Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.</p>
<h3>Examples:</h3>
<p>Given an input string of:</p>
<pre>
apples, pears # and bananas
grapes
bananas !apples
</pre>
<p>The output expected would be:</p>
<pre>
apples, pears
grapes
bananas
</pre>
<p>The code would be called like so:</p>
<pre>
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
</pre>