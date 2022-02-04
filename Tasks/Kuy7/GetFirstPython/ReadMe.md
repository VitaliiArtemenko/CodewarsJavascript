<h1><a href="https://www.codewars.com/kata/5827bc50f524dd029d0005f2">Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>You will be given an array of objects representing data about developers 
who have signed up to attend the next coding meetup that you are organising. 
The list is ordered according to who signed up first.</p>
<p>Your task is to return one of the following strings:</p>
<ul>
<li><code>< firstName here >, < country here ></code> of the first Python developer who has signed up</li>
<li><code>There will be no Python developers</code> if no Python developer has signed up.</li>
</ul>
<p>For example, given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Mark'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'G'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Scotland'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'22'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Javascript'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Victoria'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'T'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Puerto Rico'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'30'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Python'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Emma'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Norway'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'19'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Clojure'</span> },
];
</pre>
<p>your function should return <code>Victoria, Puerto Rico</code>.</p>
<p>Notes:</p>
<ul>
<li>he input array will always be valid and formatted as in the example above.</li>
</ul>