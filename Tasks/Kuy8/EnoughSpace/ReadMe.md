<h1><a href="https://www.codewars.com/kata/5875b200d520904a04000003">Will there be enough space?</a></h1>
<h2>8 Kuy</h2>
<hr>
<h3>The Story:</h3>
<p>Bob is working as a bus driver. 
However, he has become extremely popular amongst the city's residents. 
With so many passengers wanting to get aboard his bus, 
he sometimes has to face the problem of not enough space left on the bus! 
He wants you to write a simple program telling him if he will be able to fit all the passengers.</p>
<h3>Task Overview:</h3>
<p>You have to write a function that accepts three parameters:</p>
<ul>
<li><code>cap</code> is the amount of people the bus can hold excluding the driver.</li>
<li><code>on</code> is the number of people on the bus excluding the driver.</li>
<li><code>wait</code> is the number of people waiting to get on to the bus excluding the driver.</li>
</ul>
<p>If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.</p>
<h3>Usage Examples:</h3>
<pre>
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
</pre>