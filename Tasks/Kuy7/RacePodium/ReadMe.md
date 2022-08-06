<h1><a href="https://www.codewars.com/kata/62cecd4e5487c10028996e04">Race Ceremony</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>The national go-kart racing competition is taking place in your local town, and you've been called for building 
the winners' podium with the available wooden blocks. 
Thankfully you are in a wood-rich area, number of blocks are always at least 6.</p>
<p>Remember a classic racing podium have three platforms for first, second and third places. 
First place is the highest and second place is higher than third. 
Also notice that platforms are arranged as 2nd - 1st - 3rd.</p>
<p>The organizers want a podium that satisfies:</p>
<ul>
<li>The first place platform has the minimum height possible</li>
<li>The second place platform has the closest height to first place</li>
<li>All platforms have heights greater than zero.</li>
</ul>
<h3>Task</h3>
<p>Given the numbers of blocks available, return an array with the heights of 2nd, 1st, 3rd places platforms.</p>
<h3>Examples (input -> output)</h3>
<pre>
11 ->   [4, 5, 2]
6  ->   [2, 3, 1]
10 ->   [4, 5, 1]
</pre>