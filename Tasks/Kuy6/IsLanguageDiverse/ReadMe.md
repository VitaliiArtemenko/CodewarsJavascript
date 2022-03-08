<h1><a href="https://www.codewars.com/kata/58381907f8ac48ae070000de">Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>You will be given an array of objects representing data about developers who have signed up 
to attend the next web development meetup that you are organising. 
Three programming languages will be represented: Python, Ruby and JavaScript.</p>
<p>Your task is to return either:</p>
<ul>
<li><code>true</code> if the number of meetup participants representing 
any of the three programming languages is ** at most 2 times higher 
than the number of developers representing any of the remaining 
programming languages**</li>
<li><code>false</code> otherwise</li>
</ul>
<p>For example, given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Daniel'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'J.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Aruba'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'42'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Python'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Kseniya'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'T.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Belarus'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'22'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Ruby'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Sou'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Japan'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">43'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Ruby'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Hanna'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'L.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Hungary'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'JavaScript'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Jayden'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'P.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Jamaica'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'18'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'JavaScript'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Joao'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'D.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Portugal'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'25'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'JavaScript'</span> },
];
</pre>
<p>your function should return <code>false</code> as the number of JavaScript developers (<code>3</code>) is 
<strong3>times higher</strong3> than the number of Python developers (<code>1</code>). 
It can't be more than 2 times higher to be regarded as language-diverse.</p>
<p>Notes:</p>
<ul>
<li>The strings representing all three programming languages will always be formatted in the same way 
(e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.</li>
<li>The input array will always be valid and formatted as in the example above.</li>
<li>Each of the 3 programming languages will always be represented.</li>
</ul>