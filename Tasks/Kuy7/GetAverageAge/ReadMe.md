<h1><a href="https://www.codewars.com/kata/582ba36cc1901399a70005fc">Coding Meetup #11 - Higher-Order Functions Series - Find the average age</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>You will be given a sequence of objects representing data about developers 
who have signed up to attend the next coding meetup that you are organising.</p>
<p>Given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Mark'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'G'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Scotland'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'22'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Javascript'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Victoria'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'T'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Puerto Rico'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'30'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Python'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Emma'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Norway'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'19'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Clojure'</span> },
];
</pre>
<p>write a function that returns the average age of developers (rounded to the nearest integer). 
In the example above your function should return <code>24</code> (number).</p>
<h3>Notes:</h3>
<ul>
<li>The input array will always be valid and formatted as in the example above.</li>
<li>Age is represented by a number which can be any positive integer.</li>
</ul>
