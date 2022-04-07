<h1><a href="https://www.codewars.com/kata/583203e6eb35d7980400002a">Count the smiley faces!</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.</p>
<p>Rules for a smiling face:</p>
<ul>
<li>Each smiley face must contain a valid pair of eyes. Eyes can be marked as <code>:</code> or <code>;</code></li>
<li>A smiley face can have a nose, but it does not have to. Valid characters for a nose are <code>-</code> or <code>~</code></li>
<li>Every smiling face must have a smiling mouth that should be marked with either <code>)</code> or <code>D</code></li>
</ul>
<p>No additional characters are allowed except for those mentioned.</p>
<p><strong>Valid smiley face examples: <code>:) :D ;-D :~)</code></strong></p>
<p><strong>Invalid smiley faces: <code>;( :> :} :]</code></strong></p>
<h3>Example</h3>
<pre>
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
</pre>
<h3>Note</h3>
<p>In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
Order of the face (eyes, nose, mouth) elements will always be the same.</p>