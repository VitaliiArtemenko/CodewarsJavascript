<h1><a href="https://www.codewars.com/kata/57faf7275c991027af000679">Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right</a></h1>
<h2>8 Kuy</h2>
<hr>
<p>Remove <code>n</code> exclamation marks in the sentence from left to right. n is positive integer.</p>
<h3>Examples</h3>
<pre>
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
</pre>