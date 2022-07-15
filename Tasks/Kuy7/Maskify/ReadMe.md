<h1><a href="https://www.codewars.com/kata/5412509bd436bd33920011bc">Credit Card Mask</a></h1>
<h2>7 Kuy</h2>
<hr>
<h3>DESCRIPTION:</h3>
<p>Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, 
you don't want that shown on your screen. Instead, we mask it.</p>
<p>Your task is to write a function <code>maskify</code>, which changes all but the last four characters into <code>'#'</code>.</p>
<h3>Examples:</h3>
<pre>
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
</pre>