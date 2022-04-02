<h1><a href="https://www.codewars.com/kata/550498447451fbbd7600041c">Are they the "same"?</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Given two arrays <code>a</code> and <code>b</code> write a function <code>compareArrays</code> that checks whether the two arrays have 
the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in <code>b</code> are the elements in <code>a</code> squared, regardless of the order.</p>
<h3>Examples</h3>
<h4>Valid arrays</h4>
<pre>
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
</pre>
<p><code>compareArrays(a, b)</code> returns true because in <code>b</code> 121 is the square of 11, 
14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. 
It gets obvious if we write <code>b</code>'s elements in terms of squares:</p>
<pre>
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
</pre>
<h4>Invalid arrays</h4>
<p>If, for example, we change the first number to something else, <code>compareArrays</code> is not returning true anymore:</p>
<pre>
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
</pre>
<p><code>compareArrays(a, b)</code> returns false because in <code>b</code> 132 is not the square of any number of <code>a</code>.</p>
<pre>
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
</pre>
<p><code>compareArrays(a, b)</code> returns false because in <code>b</code> 36100 is not the square of any number of <code>a</code>.</p>
<p>If <code>a</code> or <code>b</code> are <code>null</code>, the problem doesn't make sense so return false.</p>