<h1><a href="https://www.codewars.com/kata/5559e4e4bbb3925164000125">Fibonacci Rabbits</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>In his publication <em>Liber Abaci Leonardo Bonacci</em>, aka Fibonacci, 
posed a problem involving a population of idealized rabbits. 
These rabbits bred at a fixed rate, matured over the course of one month, 
had unlimited resources, and were immortal.</p>
<p>Beginning with one immature pair of these idealized rabbits that produce <code>b</code> pairs of offspring 
at the end of each month. Create a function that determines the number of pair of mature rabbits after <code>n</code> months.</p>
<p>To illustrate the problem, consider the following example:</p>
<pre>fib_rabbits(5, 3) returns 19</pre>
<table>
<thead>
<tr>
<th>Month</th>
<th>Immature Pairs</th>
<th>Adult Pairs</th>
</tr>
</thead>
<tbody>
<tr><td>0</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>1</td></tr>
<tr><td>2</td><td>3</td><td>1</td></tr>
<tr><td>3</td><td>3</td><td>4</td></tr>
<tr><td>4</td><td>12</td><td>7</td></tr>
<tr><td>5</td><td>21</td><td>19</td></tr>
</tbody>
</table>
<p>Hint: any Fibonacci number can be computed using the following equation Fn = F(n-1) + F(n-2)</p>