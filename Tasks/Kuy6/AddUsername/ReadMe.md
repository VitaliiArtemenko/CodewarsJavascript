<h1><a href="https://www.codewars.com/kata/582a53ed261c2af9d200018c">Coding Meetup #10 - Higher-Order Functions Series - Create usernames</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Given the following input array:</p>
<pre>
<span style="color: purple">let</span> <span style="color: darkorange">list</span> 
= [
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Emily'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'N.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Ireland'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'30'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Ruby'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Nor'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'E.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Malaysia'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'20'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Clojure'</span> },
  ];
</pre>
<p>write a function that adds the username property to each object in the input array:</p>
<pre>
[
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Emily'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'N.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Ireland'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Europe'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'30'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Ruby'</span>, <span style="color: darkblue">username</span>: <span style="color: green">'emilyn1990'</span> },
  { <span style="color: darkblue">firstName</span> : <span style="color: green">'Nor'</span>, <span style="color: darkblue">lastName</span>: <span style="color: green">'E.'</span>, <span style="color: darkblue">country</span>: <span style="color: green">'Malaysia'</span>, <span style="color: darkblue">continent</span>: <span style="color: green">'Asia'</span>, <span style="color: darkblue">age</span>: <span style="color: green">'20'</span>, <span style="color: darkblue">language</span>: <span style="color: green">'Clojure'</span>, <span style="color: darkblue">username</span>: <span style="color: green">'nore2000'</span> },
  ];
</pre>
<p>The value of the <code>username</code> property is composed by concatenating:</p>
<ul>
<li><code>firstName</code> in lower-case;</li>
<li>first letter of the <code>lastName</code> in lower-case;</li>
<li>the birth year which for the purpose of this kata is calculated simply by subtracting <code>age</code> from the current year.<br> 
<strong>Please make sure that your function delivers the correct birth year irrespective of when it will be executed, 
for example it should also work correctly for a meetup organised in 10-years-time.</strong><br> 
The example above assumes that the function is run in year 2020.</li>
</ul>
<p>Notes:</p>
<ul>
<li>The input array will always be valid and formatted as in the example above.</li>
<li>Age is represented by a number which can be any positive integer.</li>
<li>Lastname will always be one upper-cased letter followed by dot, e.g. <code>'N.'</code></li>
</ul>
<p>Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.</p>