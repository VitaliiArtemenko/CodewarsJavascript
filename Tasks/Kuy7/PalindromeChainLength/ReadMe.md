<h1><a href="https://www.codewars.com/kata/525f039017c7cd0e1a000a26">Palindrome chain length</a></h1>
<h2>7 Kuy</h2>
<hr>
<p>Number is a palindrome if it is equal to the number with digits in reversed order. 
For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.</p>
<p>Write a function which takes a positive integer and returns the number 
of special steps needed to obtain a palindrome. 
The special step is: "reverse the digits, and add to the original number". 
If the resulting number is not a palindrome, repeat the procedure with the sum 
until the resulting number is a palindrome.</p>
<p>If the input number is already a palindrome, the number of steps is 0.</p>
<p>All inputs are guaranteed to have a final palindrome which does not overflow <code>MAX_SAFE_INTEGER</code>.</p>
<h3>Example</h3>
<p>For example, start with 87:</p>
<pre>
  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
</pre>
<pre>4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.</pre>
<h3>Additional info</h3>
<p>Some interesting information on the problem can be found 
in this Wikipedia article on <a href="https://en.wikipedia.org/wiki/Lychrel_number">Lychrel numbers</a></p>
