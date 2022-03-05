<h1><a href="https://www.codewars.com/kata/583a8bde28019d615a000035">Coding Meetup #15 - Higher-Order Functions Series - Find the odd names</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>You will be given an array of objects representing data about developers who have signed up 
to attend the next coding meetup that you are organising.</p>
<p>Given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Aba'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'N.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Monaco'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'PHP'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Abb'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'O.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Israel'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'38'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Python'</span> },
  ];
</pre>
<p>Write a function that when executed as <code>findOddNames(list1)</code> returns only the developers 
where <strong>if you add the ASCII representation of all characters in their first names, the result will be an odd number:</strong></p>
<pre>
[
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Abb'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'O.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Israel'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'38'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Python'</span> },
];
</pre>
<p>Explanation of the above:</p>
<ul>
<li>Sum of ASCII codes of letters in <code>'Aba'</code> is: <code>65 + 98 + 97 = 260</code> which is an even number</li>
<li>Sum of ASCII codes of letters in <code>'Abb'</code> is: <code>65 + 98 + 98 = 261</code> which is an <strong>odd number</strong></li>
</ul>
<p>Notes:</p>
<ul>
<li>Preserve the order of the original list.</li>
<li>Return an empty array <code>[]</code> if there is no developer with an "odd" name.</li>
<li>The input array and first names will always be valid and formatted as in the example above.</li>
</ul>

