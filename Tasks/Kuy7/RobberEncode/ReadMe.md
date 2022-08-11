<h1><a href="https://www.codewars.com/kata/629e4d5f24b98110a83b2d0d">The Robber Language</a></h1>
<h2>7 Kuy</h2>
<hr>
<h3>Introduction</h3>
<p><strong>The Robber Language</strong> (Rövarspråket) is a Swedish can't be used by children to mislead people 
not familiar with the language. It's used by kids in several screenplays created by 
<a href="https://en.wikipedia.org/wiki/Astrid_Lindgren" data-turbolinks="false" target="_blank">Astrid Lindgren</a>.</p>
<p>The idea is that every consonant in a sentence is <strong>duplicated</strong>, with an <code>0</code> 
<strong>inserted</strong> in between (<code>b</code> becomes <code>bob</code>). 
Vowels are left untouched (<code>a</code> remains an <code>a</code>). 
It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.</p>
<h3>Example</h3>
<p>In this example, the <strong>consonants</strong> <code>f</code>, <code>b</code> and <code>r</code> are modified. 
The <strong>vowels</strong> <code>o</code> and <code>a</code> are left untouched.</p>
<pre>'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)</pre>
<p><strong>Note:</strong> The dashes <code>-</code> in the example are added for readability and should not be included in the output.</p>
<h3>The Assignment</h3>
<p>Your task is to implement a function <code>robberEncode(sentence)</code> which takes in a string <code>sentence</code> 
and returns the result, converted into <strong>robber language</strong>, as a string.</p>
<h3>Notes</h3>
<ol>
<li>Only <strong>consonants</strong> should be modified; leave all other characters unchanged.</li>
<li>Both <strong>upper</strong> and <strong>lower</strong> case characters will be tested.</li>
<li>The <strong>case</strong> of the <code>o</code> character and the neighboring consonants 
should match (<code>F => FOF</code> and <code>f => fof</code>).</li>
<li>For the purpose of this kata, a character is considered a <strong>consonant</strong> if it's equal 
to one of the letters <code>BCDFGHJKLMNPQRSTVWXYZ</code>.</li>
</ol>
<h3>Testing</h3>
<p>The tests will challenge your function with sentences of <code>length 0-255</code>, 
ASCII characters between <strong>32-126</strong> and <strong>nothing else</strong>.</p>