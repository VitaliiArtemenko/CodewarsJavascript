<h1><a href="https://www.codewars.com/kata/550f22f4d758534c1100025a">Directions Reduction</a></h1>
<h2>5 Kuy</h2>
<hr>
<p><strong>Once upon a time, on a way through the old wild mountainous west,…</strong></p>
<p>… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". 
Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.</p>
<p>Going to one direction and coming back the opposite direction right away is a needless effort. 
Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!</p>
<p><strong>How I crossed a mountainous desert the smart way.</strong></p>
<p>The directions given to the man are, for example, the following (depending on the language):</p>
<pre>
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
</pre>
<p>You can <em>immediately</em> see that going "NORTH" and <em>immediately</em> "SOUTH" 
is not reasonable, better stay to the same place! 
So the task is to give to the man a simplified version of the plan. 
A better plan in this case is simply:</p>
<pre>
["WEST"]
or
{ "WEST" }
or
[West]
</pre>
<h3>Other examples:</h3>
<p>In <code>["NORTH", "SOUTH", "EAST", "WEST"]</code>, the direction <code>"NORTH" + "SOUTH"</code> 
is going north and coming back <em>right away</em>.</p>
<p>The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is []</p>
<p>In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite, 
but they become directly opposite after the reduction of "EAST" and "WEST" 
so the whole path is reducible to ["WEST", "WEST"].</p>
<h3>Task</h3>
<p>Write a function <code>dirReduc</code> which will take an array of strings 
and returns an array of strings with the needless 
directions removed (W<->E or S<->N side by side).</p>
<h3>Notes:</h3>
<ul>
<li>Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] 
is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" 
are not directly opposite of each other and can't become such. 
Hence, the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].</li>
</ul>