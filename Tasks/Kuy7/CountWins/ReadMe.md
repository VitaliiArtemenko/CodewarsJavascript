<h1><a href="https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9">Find how many times did a team from a given country win the Champions League?</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>Create a function that takes two arguments:</p>
<ol>
<li>An array of objects which feature the season, the team and the country of the Champions League winner.</li>
<li>Country (as a string, for example, 'Portugal')</li>
</ol>
<p>You function should then return the number which represents the number of times a team from a given country has won. 
Return 0 if there have been no wins.</p>
<p>For example if the input array is as follows:</p>
<pre>
<span style="color: darkred">const</span> <span style="color: darkorange">winnerList1</span> = [
    { <span style="color: #006600">season</span>: <span style="color: yellow">'1999-00'</span>, <span style="color: #006600">team</span>: <span style="color: yellow">'Real Madrid'</span>, <span style="color: #006600">country</span>: <span style="color: yellow">'Spain'</span> },
    { <span style="color: #006600">season</span>: <span style="color: yellow">'2000-01'</span>, <span style="color: #006600">team</span>: <span style="color: yellow">'Bayern Munich'</span>, <span style="color: #006600">country</span>: <span style="color: yellow">'Germany'</span> },
    { <span style="color: #006600">season</span>: <span style="color: yellow">'2001-02'</span>, <span style="color: #006600">team</span>: <span style="color: yellow">'Bayern Munich'</span>, <span style="color: #006600">country</span>: <span style="color: yellow">'Germany'</span> },
    { <span style="color: #006600">season</span>: <span style="color: yellow">'2002-03'</span>, <span style="color: #006600">team</span>: <span style="color: yellow">'Milan Milan'</span>, <span style="color: #006600">country</span>: <span style="color: yellow">'Italy'</span> },
    { <span style="color: #006600">season</span>: <span style="color: yellow">'2003-04'</span>, <span style="color: #006600">team</span>: <span style="color: yellow">'Porto Porto'</span>, <span style="color: #006600">country</span>: <span style="color: yellow">'Portugal'</span> },
];
</pre>
<p><code>countWins(winnerList1, 'Spain')</code> => should return 2</p>
<p><code>countWins(winnerList1, 'Portugal')</code> => should return 1</p>
<p><code>countWins(winnerList1, 'Sportland')</code> => should return 0</p>