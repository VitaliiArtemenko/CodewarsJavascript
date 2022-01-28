<h1><a href="https://www.codewars.com/kata/570cc83df616a85944001315">Count words</a></h1>
<h2>8 Kuy</h2>
<hr>

<p>Can you implement a function that will return number of words in a string?</p>
<p>You have to ensure that spaces in string is a whitespace for real.</p>
<p>Let's take a look on some examples:</p>
<pre>
countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
</pre>
<p>What kind of tests we made for your code:</p>
<ul>
<li>Function have to count words and not spaces. You have to be sure that you doing it right</li>
<li>Empty string has no words.</li>
<li>String with spaces around should be trimmed.</li>
<li>Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter</li>
<li>Doublecheck that words with chars like -, ', ` are counted right.</li>
</ul>