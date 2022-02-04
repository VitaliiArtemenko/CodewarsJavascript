<h1><a href="https://www.codewars.com/kata/6089c7992df556001253ba7d">What a "Classy" Song</a></h1>
<h2>7 Kuy</h2>
<hr>

<p>Your job is to create a class called <code>Song</code></p>
<p>A new <code>Song</code> will take two parameters, <code>title</code> and <code>artist</code>.</p>
<pre>
const <span style="color: darkorange">mountMoose</span> 
= new Song(<span style="color: green">'Mount Moose', 'The Snazzy Moose'</span>);

mountMoose.<span style="color: blue">title</span> => <span style="color: green">'Mount Moose'</span>
mountMoose.<span style="color: blue">artist</span> => <span style="color: green">'The Snazzy Moose'</span>
</pre>
<p>You will also have to create an instance method named <code>howMany()</code></p>
<p>The method takes an array of people who have listened to the song that day. 
The output should be how many new listeners the song gained on that day out of all listeners. 
Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".</p>
<h3>Example</h3>
<pre>
const <span style="color: darkorange">mountMoose</span> 
= new Song(<span style="color: green">'Mount Moose', 'The Snazzy Moose'</span>);

<span style="color: grey">// day 1 (or test 1)</span>
mountMoose.<span style="color: blue">howMany</span>(<span style="color: green">['John', 'Fred', 'BOb', 'carl', 'RyAn']</span>); => <span style="color: darkorange">5</span>
<span style="color: grey">// These are all new since they are the first listeners.</span>

<span style="color: grey">// day 2</span>
mountMoose.<span style="color: blue">howMany</span>(<span style="color: green">['JoHn', 'Luke', 'AmAndA']</span>); => <span style="color: darkorange">2</span>
<span style="color: grey">// Luke and Amanda are new, john already listened to it the previous day</span>
</pre>
<p>Also if the same person listened to it more than once a day it should only count them once.</p>
<h3>Example</h3>
<pre>
const <span style="color: darkorange">mountMoose</span> 
= new Song(<span style="color: green">'Mount Moose', 'The Snazzy Moose'</span>);

<span style="color: grey">// day 1 (or test 1)</span>
mountMoose.<span style="color: blue">howMany</span>(<span style="color: green">['John', 'joHN', 'carl']</span>); => <span style="color: darkorange">2</span>
</pre>