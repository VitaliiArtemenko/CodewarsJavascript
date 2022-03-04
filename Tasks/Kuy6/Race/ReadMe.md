<h1><a href="https://www.codewars.com/kata/55e2adece53b4cdcb900006c">Tortoise racing</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Two tortoises named <strong>A</strong> and <strong>B</strong> must run a race. 
A starts with an average speed of <code>720 feet per hour</code>. 
Young <strong>B</strong> knows she runs faster than <strong>A</strong>, and furthermore has not finished her cabbage.</p>
<p>When she starts, at last, she can see that <strong>A</strong> has a <code>70 feet lead</code> but <strong>B</strong>'s 
speed is <code>850 feet per hour</code>. How long will it take <strong>B</strong> to catch <strong>A</strong>?</p>
<p>More generally: given two speeds <code>v1</code> (<strong>A</strong>'s speed, integer > 0) and 
<code>v2</code> (<strong>B</strong>'s speed, integer > 0) and a lead <code>g</code> (integer > 0). 
How long will it take <strong>B</strong> to catch <strong>A</strong>?</p>
<p>The result will be an array <code>[hour, min, sec]</code> which is the time needed in hours, 
minutes and seconds (round down to the nearest second) or a string in some languages.</p>
<p>If <code>v1 >= v2</code> then return <code>null</code>.</p>
<h3>Examples:</h3>
<pre>
race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37)   => [3, 21, 49]
</pre>