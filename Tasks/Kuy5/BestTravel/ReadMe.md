<h1><a href="https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa">Best travel</a></h1>
<h2>5 Kuy</h2>
<hr>
<h3>DESCRIPTION:</h3>
<p>John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list 
of distances between these towns: <code>ls = [50, 55, 57, 58, 60]</code>. 
John is tired of driving, and he says to Mary that he doesn't want to drive more than <code>t = 174</code> miles 
and he will visit only <code>3</code> towns.</p>
<p>Which distances, hence which towns, they will choose so that the sum of the distances is the biggest 
possible to please Mary and John?</p>
<h3>Example:</h3>
<p>With list <code>ls</code> and 3 towns to visit they can make a choice between: <code>[50,55,57],[50,55,58],[50,55,60],
[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60]</code>.</p>
<p>The sums of distances are then: <code>162, 163, 165, 165, 167, 168, 170, 172, 173, 175</code>.</p>
<p>The biggest possible sum taking a limit of <code>174</code> into account is then <code>173</code> 
and the distances of the <code>3</code> corresponding towns is <code>[55, 58, 60]</code>.</p>
<p>The function <code>chooseBestSum()</code> will take as parameters <code>t</code> 
(maximum sum of distances, integer >= 0), <code>k</code> (number of towns to visit, k >= 1) 
and <code>ls</code> (list of distances, all distances are positive or zero integers and this list has at least one element). 
The function returns the "best" sum ie the biggest possible sum of <code>k</code> distances 
less than or equal to the given limit <code>t</code>, if that sum exists, or otherwise <code>null</code></p>
<h3>Examples:</h3>
<p><code>ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163</code></p>
<p><code>xs = [50] choose_best_sum(163, 3, xs) -> null</code></p>
<p><code>ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228</code></p>
<h3>Note:</h3>
<ul><li>try not to modify the input list of distances <code>ls</code></li></ul>