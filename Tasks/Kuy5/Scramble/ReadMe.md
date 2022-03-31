<h1><a href="https://www.codewars.com/kata/55c04b4cc56a697bb0000048">Scramblies</a></h1>
<h2>5 Kuy</h2>
<hr>
<p>Complete the function <code>scramble(str1, str2)</code> that returns <code>true</code> 
if a portion of <code>str1</code> characters can be rearranged to match <code>str2</code>, 
otherwise returns <code>false</code>.</p>
<h3>Notes:</h3>
<ul>
<li>Only lower case letters will be used (a-z). No punctuation or digits will be included.</li>
<li>Performance needs to be considered.</li>
</ul>
<h3>Examples</h3>
<pre>
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
</pre>