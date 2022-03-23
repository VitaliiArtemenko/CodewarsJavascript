<h1><a href="https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f">Crash Override</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>Every budding hacker needs an alias! 
The <code>Phantom Phreak</code>, <code>Acid Burn</code>, <code>Zero Cool</code> and <code>Crash Override</code> 
are some notable examples from the film <code>Hackers</code>.</p>
<p>Your task is to create a function that, given a proper first and last name, will return the correct alias.</p>
<ul>
<li>Two objects that return a one word name in response to the first letter of the first name and one for 
the first letter of the surname are already given.</li>
<li>If the first character of either of the names given to the function is not a letter from <code>A - Z</code>, 
you should return <code>"Your name must start with a letter from A - Z."</code></li>
<li>Sometimes people might forget to capitalize the first letter of their name 
so your function should accommodate for these grammatical errors.</li>
</ul>
<h3>Examples:</h3>
<pre>
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
</pre>