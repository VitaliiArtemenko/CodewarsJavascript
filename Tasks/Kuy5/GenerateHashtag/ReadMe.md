<h1><a href="https://www.codewars.com/kata/52449b062fb80683ec000024">The Hashtag Generator</a></h1>
<h2>5 Kuy</h2>
<hr>
<p>The marketing team is spending way too much time typing in hashtags.<br>
Let's help them with our own Hashtag Generator!</p>
<p>Here's the deal:</p>
<ul>
<li>It must start with a hashtag (#).</li>
<li>All words must have their first letter capitalized.</li>
<li>f the final result is longer than 140 chars it must return <code>false</code>.</li>
<li>If the input or the result is an empty string it must return <code>false</code>.</li>
</ul>
<h3>Examples</h3>
<pre>
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
</pre>