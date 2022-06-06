<h1><a href="https://www.codewars.com/kata/5202ef17a402dd033c000009">Title Case</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>A string is considered to be in title case if each word in the string is either (a) capitalised (that is, 
only the first letter of the word is in upper case) or (b) considered to be an exception 
and put entirely into lower case unless it is the first word, which is always capitalised.</p>
<p>Write a function that will convert a string into title case, 
given an optional list of exceptions (minor words). 
The list of minor words will be given as a string with each word separated by a space. 
Your function should ignore the case of the minor words string -- it should behave in the same way 
even if the case of the minor word string is changed.</p>
<h3>Arguments</h3>
<ul>
<li><strong>First argument (required)</strong>: the original string to be converted.</li>
<li><strong>Second argument (optional)</strong>: space-delimited list of minor words 
that must always be lowercase except for the first word in the string. </li>
<li>The JavaScript tests will pass <code>undefined</code> when this argument is unused.</li>
</ul>
<h3>Examples:</h3>
<pre>
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
</pre>