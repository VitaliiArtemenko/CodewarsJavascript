<h1><a href="https://www.codewars.com/kata/609eee71109f860006c377d1">Last Survivor</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>You are given a string of letters and an array of numbers.
<br>The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
<br>After each removal the size of the string decreases (there is no empty space).
<br>Return the only letter left.</p>

<h3>Example:</h3>

<pre>let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'</pre>

<h3>Notes</h3>
<ul>
<li>The given string will never be empty.</li>
<li>All numbers are valid.</li>
<li>There can be duplicate letters and numbers.</li>
</ul>