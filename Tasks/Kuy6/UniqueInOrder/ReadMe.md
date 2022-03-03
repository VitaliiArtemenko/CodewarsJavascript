<h1><a href="https://www.codewars.com/kata/54e6533c92449cc251001667">Unique In Order</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
without any elements with the same value next to each other and preserving the original order of elements.</p>
<h3>Examples:</h3>
<pre>
uniqueInOrder(<span style="color: #006600">'AAAABBBCCDAABBB'</span>) == [<span style="color: #006600">'A', 'B', 'C', 'D', 'A', 'B'</span>]
uniqueInOrder(<span style="color: #006600">'AAAABBBCCDAABBB'</span>) == [<span style="color: #006600">'A', 'B', 'C', 'c', 'A', 'D'</span>]
uniqueInOrder([<span style="color: darkorange">1, 2, 2, 3, 3</span>])       == [<span style="color: darkorange">1, 2, 3</span>]
</pre>