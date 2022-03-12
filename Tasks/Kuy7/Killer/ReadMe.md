<h1><a href="https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d">Who is the killer?</a></h1>
<h2>7 Kuy</h2>
<hr>
<h3>Some people have been killed!</h3>
<p>You have managed to narrow the suspects down to just a few. 
Luckily, you know every person who those suspects have seen on the day of the murders.</p>
<h3>Task</h3>
<p>Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:</p>
<pre>
{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
</pre>
<p>and also a list of the names of the dead people:</p>
<pre>
['Lucas', 'Bill']
</pre>
<p>return the name of the one killer, in our case <code>'James'</code> because he is the only person 
that saw both <code>'Lucas'</code> and <code>'Bill'</code></p>