<h1><a href="https://www.codewars.com/kata/589577f0d1b93ae32a000001">Simple Fun #88: Sort By Height</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>Some people are standing in a row in a park. There are trees between them which cannot be moved.</p>
<p>Your task is to rearrange the people by their heights in a non-descending order without moving the trees.</p>
<h3>Example</h3>
<p>For a = <code>[-1, 150, 190, 170, -1, -1, 160, 180]</code>, the output should be 
<code>[-1, 150, 160, 170, -1, -1, 180, 190]</code></p>
<h3>Input/Output</h3>
<ul>
<li><code>[input]</code> integer array <code>a</code></li>
<li>If a[i] = -1, then the ith position is occupied by a tree. 
Otherwise, a[i] is the height of a person standing in the ith position.</li>
<li>Constraints:<br>
<code>5 ≤ a.length ≤ 30</code>,<br>
<code>-1 ≤ a[i] ≤ 200</code>.</li>
<li><code>[output]</code> an integer array as</li>
<li>sorted array a with all the trees untouched.</li>
</ul>

