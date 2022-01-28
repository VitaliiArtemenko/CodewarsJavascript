<h1><a href="https://www.codewars.com/kata/57280481e8118511f7000ffa">Training JS #18: Methods of String object--concat() split() and its good friend join()</a></h1>
<h2>8 Kuy</h2>
<hr>

<h3>Task</h3>
<p>Implement a function which accepts 2 arguments: <code>string</code> and <code>separator</code>.</p>
<p>The expected algorithm: split the <code>string</code> into words by spaces, split each word into separate characters 
and join them back with the specified <code>separator</code>, 
join all the resulting "words" back into a sentence with spaces.</p>

<h3>For example:</h3>
<pre>
splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
</pre>