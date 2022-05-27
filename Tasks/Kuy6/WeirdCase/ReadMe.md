<h1><a href="https://www.codewars.com/kata/52b757663a95b11b3d00062d">WeIrD StRiNg CaSe</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Write a function <code>toWeirdCase</code> that accepts a string, and returns the same string 
with all even indexed characters in each word upper-cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper-cased, and you need to start over for each word.</p>
<p>The passed in string will only consist of alphabetical characters and spaces(<code>' '</code>). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(<code>' '</code>).</p>
<h3>Examples:</h3>
<pre>
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
</pre>