<h1><a href="https://www.codewars.com/kata/5262119038c0985a5b00029f">Is a number prime?</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Define a function that takes one integer argument and returns logical value <code>true</code> 
or <code>false</code> depending on if the integer is a prime.</p>
<p>Per Wikipedia, a prime number (or a prime) is a natural number greater 
than 1 that has no positive divisors other than 1 and itself.</p>
<h3>Requirements</h3>
<ul>
<li>You can assume you will be given an integer input.</li>
<li>You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).</li>
<li><strong>NOTE on performance</strong>: There are no fancy optimizations required, 
but still the most trivial solutions might time out. 
Numbers go up to 2^31 (or similar, depends on language version). 
Looping all the way up to n, or n/2, will be too slow.</li>
</ul>
<h3>Examples:</h3>
<pre>
is_prime(1)  /* false */
is_prime(2)  /* true  */
is_prime(-1) /* false */
</pre>