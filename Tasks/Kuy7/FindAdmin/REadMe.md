<h1><a href="https://www.codewars.com/kata/582dace555a1f4d859000058">Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>You will be given an array of objects representing data about developers 
who have signed up to attend the next coding meetup that you are organising.</p>
<p>Given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Harry'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'K.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Brazil'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'22'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Javascript'</span>, <span style="color: darkblue">githubAdmin</span>: <span style="color: green">'yes'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Kseniya'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'T.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Belarus'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Ruby'</span>, <span style="color: darkblue">githubAdmin</span>: <span style="color: green">'no'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Jing'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'X.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'China'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'34'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Javascript'</span>, <span style="color: darkblue">githubAdmin</span>: <span style="color: green">'yes'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Piotr'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Poland'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'29'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'JavaScript'</span>, <span style="color: darkblue">githubAdmin</span>: <span style="color: green">'no'</span> },
];
</pre>
<p>write a function that when executed as <code>findAdmin(list1, 'JavaScript')</code> returns only the JavaScript developers who are GitHub admins:</p>
<pre>
[
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Harry'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'K.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Brazil'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'22'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Javascript'</span>, <span style="color: darkblue">githubAdmin</span>: <span style="color: green">'yes'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Jing'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'X.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'China'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'34'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Javascript'</span>, <span style="color: darkblue">githubAdmin</span>: <span style="color: green">'yes'</span> },
];
</pre>
<h3>Notes:</h3>
<ul>
<li>The original order should be preserved.</li>
<li>If there are no GitHub admin developers in a given language then return an empty array <code>[]</code>.</li>
<li>The input array will always be valid and formatted as in the example above.</li>
<li>The strings representing whether someone is a GitHub admin will always be formatted as <code>'yes'</code> and <code>'no'</code> (all lower-case).</li>
<li>The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript') will always be formatted with upper-case 'J' and 'S'.</li>
</ul>

