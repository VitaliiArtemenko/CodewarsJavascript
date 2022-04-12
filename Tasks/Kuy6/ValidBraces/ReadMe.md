<h1><a href="https://www.codewars.com/kata/5277c8a221e209d3f6000b56">Valid Braces</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Write a function that takes a string of braces, and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.</p>
<p>All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: <code>()[]{}</code>.</p>
<h3>What is considered Valid?</h3>
<p>A string of braces is considered valid if all braces are matched with the correct brace.</p>
<h3>Examples</h3>
<pre>
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
</pre>