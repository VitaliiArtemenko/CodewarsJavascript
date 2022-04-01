<h1><a href="https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa">Categorize New Member</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help 
with an application form that will tell prospective members which category they will be placed.</p>
<p>To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.</p>
<h3>Input</h3>
<p>Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.</p>
<h3>Output</h3>
<p>Output will consist of a list of string values stating whether the respective member is 
to be placed in the senior or open category.</p>
<h3>Example</h3>
<pre>
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
</pre>