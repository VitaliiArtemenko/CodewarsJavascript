<h1><a href="https://www.codewars.com/kata/57642a90dee2da8dd3000161">Arguments to Binary addition</a></h1>
<h2>8 Kuy</h2>
<hr>

<p>Given an array add all the number elements and return the binary equivalent of that sum;
to make the code bulletproof anything else than a number should be added as 0 since it can't be added.</p>

<p>If your language can handle float binaries assume the array won't contain float or doubles.</p>

<h3>Examples:</h3>
<pre>
arr2bin([<span style="color: darkorange">1, 2</span>]) == <span style="color: green">'11'</span>
arr2bin([<span style="color: darkorange">[1, 2, <span style="color: green">'a'</span>]</span>]) == <span style="color: green">'11'</span>
arr2bin([]) == <span style="color: green">'0'</span>

NOTE: <span style="color: red">'NaN'</span> is a number too <span style="color: purple">in</span> javascript <span style="color: purple">for</span> decimal, binary and n-ary base
</pre>