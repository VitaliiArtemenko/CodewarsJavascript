<h1><a href="https://www.codewars.com/kata/58f5c63f1e26ecda7e000029">Mexican Wave</a></h1>
<h2>6 Kuy</h2>
<hr>
<h3>Introduction</h3>
<pre>The wave (known as the Mexican wave in the English-speaking world outside North America) is an example 
of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, 
and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
The result is a wave of standing spectators that travels through the crowd, 
even though individual spectators never move away from their seats. 
In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, 
and so the wave is able to travel continuously around the arena; in discontinuous seating arrangements, 
the wave can instead reflect back and forth through the crowd. 
When the gap in seating is narrow, the wave can sometimes pass through it. 
Usually only one wave crest will be present at any given time in an arena, although simultaneous, 
counter-rotating waves have been produced. (Source <a href="https://en.wikipedia.org/wiki/Wave_(audience)">Wikipedia</a> )</pre>
<h3>Task</h3>
<pre>
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
</pre>
<h3>Rules</h3>
<pre>
1. The input string will always be lower case but maybe empty.

2. If the character in the string is whitespace then pass over it as if it was an empty seat
</pre>
<h3>Example</h3>
<pre>wave("hello") => []string{"Hello", "hEllo", "heLlo", "helLo", "hellO"}</pre>