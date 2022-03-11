<h1><a href="https://www.codewars.com/kata/5825792ada030e9601000782">zipWith</a></h1>
<h2>6 Kuy</h2>
<hr>
<p><code>zipWith</code> takes a function and two arrays and zips the arrays together, 
applying the function to every pair of values. The function value is one new array.</p>
<p>If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)</p>
<p>Inputs should not be modified.</p>
<h3>Examples</h3>
<pre>
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
</pre>
<p><strong>Note:</strong> Assume all input is valid.</p>