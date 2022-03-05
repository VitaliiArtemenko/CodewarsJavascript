<h1><a href="https://www.codewars.com/kata/582887f7d04efdaae3000090">Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>You will be given a sequence of objects representing data about developers 
who have signed up to attend the next coding meetup that you are organising.</p>
<p>Your task is to return a sequence which includes the developer who is the oldest. 
In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.</p>
<p>For example, given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Gabriel'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'X.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Monaco'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'PHP'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Odval'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'F.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Mongolia'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'38'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Python'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Emilija'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'S.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Lithuania'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">19'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Python'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Sou'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Japan'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'PHP'</span> },
];
</pre>
<p>your function should return the following array:</p>
<pre>
[
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Gabriel'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'X.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Monaco'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'PHP'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Sou'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Japan'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'PHP'</span> },
];
</pre>
<p>Notes:</p>
<ul>
<li>The input array will always be valid and formatted as in the example above and will never be empty.</li>
</ul>
