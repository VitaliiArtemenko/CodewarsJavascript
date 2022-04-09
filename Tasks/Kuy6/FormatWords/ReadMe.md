<h1><a href="https://www.codewars.com/kata/51689e27fe9a00b126000004">Format words into a sentence</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Complete the method so that it formats the words into a single comma separated value. 
The last word should be separated by the word 'and' instead of a comma. 
The method takes in an array of strings and returns a single formatted string.</p>
<h3>Notes:</h3>
<ul>
<li><strong>Empty string</strong> values should be ignored.</li>
<li><strong>Empty arrays</strong> or <code>null</code> values being passed into the method should result in an empty string being returned.</li>
</ul>
<p>Example: <strong>(Input --> output)</strong></p>
<pre>
['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
</pre>
