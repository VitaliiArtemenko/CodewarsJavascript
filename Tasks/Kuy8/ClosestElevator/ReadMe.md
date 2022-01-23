<h1><a href="https://www.codewars.com/kata/5c374b346a5d0f77af500a5a">Closest elevator</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>Given 2 elevators (named "left" and "right") in a building with 3 floors 
(numbered <code>0</code> to <code>2</code>), write a function <code>elevator</code> accepting 3 arguments (in order):</p>

<ul>
<li><code>left</code> - the current floor of the left elevator</li>
<li><code>right</code> - the current floor of the right elevator</li>
<li><code>call</code> - the floor that called an elevator</li>
</ul>

<p>It should return the name of the elevator closest to the called floor ("<code>left</code>"/"<code>right</code>").</p>

<p>In the case where both elevators are equally distant from the called floor, choose the elevator to the right.</p>

<p>You can assume that the inputs will always be valid integers between 0-2.</p>

<h3>Examples</h3>

<div style="background-color: #333333">
<pre>
elevator(<span style="color: darkorange">0, 1, 0</span>); <span style="color: #7f7f7f">// => "left"</span>
elevator(<span style="color: darkorange">0, 1, 1</span>); <span style="color: #7f7f7f">// => "right"</span>
elevator(<span style="color: darkorange">0, 1, 2</span>); <span style="color: #7f7f7f">// => "right"</span>
elevator(<span style="color: darkorange">0, 0, 0</span>); <span style="color: #7f7f7f">// => "right"</span>
elevator(<span style="color: darkorange">0, 2, 1</span>); <span style="color: #7f7f7f">// => "right"</span>
</pre>
</div>