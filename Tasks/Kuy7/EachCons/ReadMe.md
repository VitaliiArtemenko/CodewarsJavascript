<h1><a href="https://www.codewars.com/kata/545af3d185166a3dec001190">Enumerable Magic #20 - Cascading Subsets</a></h1>
<h2>7 Kuy</h2>
<hr>

<p>Create a method <code>eachCons</code> that accepts an <code>array</code> 
and a number <code>n</code>, and returns cascading subsets of the list of size n, like so:</p>

<pre>
each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
</pre>
<p>As you can see, the lists are cascading; i.e., they overlap, but never out of order.</p>