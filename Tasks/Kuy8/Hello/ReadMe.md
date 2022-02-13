<h1><a href="https://www.codewars.com/kata/57e3f79c9cb119374600046b">Hello, Name or World!</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>Define a method <code>hello</code> that returns "Hello, Name!" 
to a given <code>name</code>, or says Hello, World! if name is not given (or passed as an empty String).</p>
<p>Assuming that <code>name</code> is a <code>String</code>, and it checks for user typos to return a name with a first capital letter (Xxxx).</p>
<h3>Examples:</h3>
<pre>
hello <span style="color: #008800">"john"</span> => <span style="color: #008800">"Hello, John!"</span>
hello <span style="color: #008800">"aliCE"</span>  => <span style="color: #008800">"Hello, Alice!"</span>
hello          => <span style="color: #008800">"Hello, World!"</span> <span style="color: gray"># name not given</span>
hello <span style="color: #008800">""</span>       => <span style="color: #008800">"Hello, World!"</span> <span style="color: gray"># name is an empty String</span>
</pre>