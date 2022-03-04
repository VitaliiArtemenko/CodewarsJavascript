<h1><a href="https://www.codewars.com/kata/58291fea7ff3f640980000f9">Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>You will be given a sequence of objects representing data about developers who have signed up to attend 
the next coding meetup that you are organising.</p>
<p>Your task is to return:</p>
<ul>
<li><code>true</code> if all of the following continents / geographic zones will be represented by at least one developer: 
'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.</li>
<li><code>false</code> otherwise.</li>
</ul>
<p>For example, given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Fatima'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'A.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Algeria'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Africa'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'25'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'JavaScript'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Agustín'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'M.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Chile'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Americas'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'39'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Ruby'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Emilija'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'S.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Lithuania'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">19'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Python'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Sou'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'B.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Japan'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'PHP'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Oliver'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'Q.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Australia'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Oceania'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'49'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Java'</span> },
];
</pre>
<p>your function should return <code>true</code> as there is at least one developer from the required 5 geographic zones.</p>
<p>Notes:</p>
<ul>
<li>The input array and continent names will always be valid and formatted as in the list above for example 'Africa'
will always start with upper-case 'A'.</li>
</ul>