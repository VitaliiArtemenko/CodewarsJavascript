<h1><a href="https://www.codewars.com/kata/5827acd5f524dd029d0005a4">Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>You will be given an array of objects representing data about developers 
who have signed up to attend the next coding meetup that you are organising.</p>
<p>Your task is to return:</p>
<ul>
<li><code>true</code> if at least one Ruby developer has signed up</li>
<li><code>false</code> if there will be no Ruby developers</li>
</ul>
<p>For example, given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Emma'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'Z'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Netherlands'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'29'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Ruby'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Piotr'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Poland'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'28'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Javascript'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Jayden'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'P'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Jamaica'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'41'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Javascript'</span> },
];
</pre>
<p>your function should return <code>true</code>.</p>
<h3>Note:</h3>

<ul>
<li>The input array will always be valid and formatted as in the example above.</li>
</ul>

