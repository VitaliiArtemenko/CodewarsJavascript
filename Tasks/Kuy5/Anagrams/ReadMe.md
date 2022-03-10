<h1><a href="https://www.codewars.com/kata/523a86aa4230ebb5420001e1">Where my anagrams at?</a></h1>
<h2>5 Kuy</h2>
<hr>
<p>What is an anagram? 
Well, two words are anagrams of each other if they both contain the same letters. For example:</p>
<pre>
'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
</pre>
<p>Write a function that will find all the anagrams of a word from a list. You will be given two inputs 
a word and an array with words. You should return an array of all the anagrams or an empty array 
if there are none.<br>
For example:</p>
<pre>
anagrams(<span style="color: green">'abba'</span>, [<span style="color: green">'aabb', 'abcd', 'bbaa', 'dada'</span>]) => [<span style="color: green">'aabb', 'bbaa'</span>]

anagrams(<span style="color: green">'racer'</span>, [<span style="color: green">'crazer', 'carer', 'racar', 'caers', 'racer'</span>]) => [<span style="color: green">'carer', 'racer'</span>]

anagrams(<span style="color: green">'laser'</span>, [<span style="color: green">'lazing', 'lazy',  'lacer'</span>]) => []
</pre>