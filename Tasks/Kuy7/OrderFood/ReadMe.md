<h1><a href="https://www.codewars.com/kata/583952fbc23341c7180002fd">Coding Meetup #14 - Higher-Order Functions Series - Order the food</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>You will be given an array of objects representing data about developers who have signed up 
to attend the next coding meetup that you are organising.</p>
<p>Your task is to return an <strong>object which includes 
the count of food options selected by the developers on the meetup sign-up form.</strong></p>
<p>For example, given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Noah'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'M.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Switzerland'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'19'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'C'</span>, <span style="color: darkblue">meal</span>: <span style="color: green">'vegetarian'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Anna'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'R.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Liechtenstein'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'52'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'JavaScript'</span>,  <span style="color: darkblue">meal</span>: <span style="color: green">'standard'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Ramona'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'R.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Paraguay'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'29'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Ruby'</span>,  <span style="color: darkblue">meal</span>: <span style="color: green">'vegan'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'George'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'England'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'81'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'C'</span>,  <span style="color: darkblue">meal</span>: <span style="color: green">'vegetarian'</span> },
];
</pre>
<p>your function should return the following object (the order of properties does not matter)</p>
<pre>
{ vegetarian: <span style="color: darkorange;">2</span>, standard: <span style="color: darkorange;">1</span>, vegan: <span style="color: darkorange;">1</span> }
</pre>
<h3>Notes:</h3>
<ul>
<li>The order of the meals count in the object does not matter.</li>
<li>The count value should be a valid number.</li>
<li>The input array will always be valid and formatted as in the example above.</li>
<li>there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 
<code>'standard'</code>, <code>'vegetarian'</code>, <code>'vegan'</code>, <code>'diabetic'</code>, <code>'gluten-intolerant'</code></li>
</ul>
