<h1><a href="https://www.codewars.com/kata/556deca17c58da83c00002db">Tribonacci Sequence</a></h1>
<h2>6 Kuy</h2>
<hr>
<p>Well met with Fibonacci bigger brother, AKA Tribonacci.</p>
<p>As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) 
numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(</p>
<p>So, if we are to start our Tribonacci sequence with <code>[1, 1, 1]</code> as a starting input (AKA signature), 
we have this sequence:</p>
<pre>[1, 1 ,1, 3, 5, 9, 17, 31, ...]</pre>
<p>But what if we started with <code>[0, 0, 1]</code> as a signature? 
As starting with <code>[0, 1]</code> instead of <code>[1, 1]</code> basically 
shifts the common Fibonacci sequence by once place, 
you may be tempted to think that we would get the same sequence shifted 
by 2 places, but that is not the case, and we would get:</p>
<pre>[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]</pre>
<p>Well, you may have guessed it by now, but to be clear: 
you need to create a fibonacci function that given a <strong>signature</strong> array/list, 
returns the <strong>first n elements - signature included</strong> of the so seeded sequence.</p>
<p>Signature will always contain 3 numbers; 
n will always be a non-negative number; 
if <code>n == 0</code>, then return an empty array and be ready for anything else
which is not clearly specified ;)</p>



